#ifndef __ZD_CANBC_H__
#define __ZD_CANBC_H__

#include <string>
#include <vector>
#include <map>
#include <iostream>
#include <map>

#include "../inc/json.hpp"
using json = nlohmann::json;

struct CANBCSignal_T
{
	std::string name;	  //Parameter's Name (singal's name)
	int position;		   //Parameter's Position in ParamList
	int bit_length;		   //Parameter's bit length
	int origian_start_bit; //absolute bit offset (range from 0 to 63)
	bool is_big_endian;	//big or little Endian

	float offset;
	float factor;
	float value_min;
	float value_max;

	unsigned long long value; //raw value;

	int start_byte; //Byte start position, !!!STARTED FROM 1
	int start_bit;  //Bit start position(range from 0 to 7), !!!STARTED FROM 0

	int start_bit_for_bigendian;

	std::map<unsigned long long, std::string> value_table;

	CANBCSignal_T() : name(), position(0), bit_length(0), origian_start_bit(0), is_big_endian(false),
					  value(0), start_byte(0), start_bit(0), start_bit_for_bigendian(0), value_table()
	{
		this->offset = 0.0;
		this->factor = 0.0;
		this->value_min = 0.0;
		this->value_max = 0.0;
	}

	// called when initializing the CANBC message template
	CANBCSignal_T(const json &signal) : position(0), value(0), value_table()
	{
		this->name = signal["name"];
		this->origian_start_bit = signal["start_bit"];
		this->bit_length = signal["bit_length"];
		this->is_big_endian = signal["is_big_endian"];

		try
		{
			this->offset = signal.at("offset").get<float>();
			this->factor = signal.at("factor").get<float>();
			this->value_min = signal.at("value_min").get<float>();
			this->value_max = signal.at("value_max").get<float>();

			for (unsigned int i = 0; i < signal.at("value_table").size(); i++)
			{
				this->value_table.insert(std::pair<unsigned long long, std::string>(
					signal["value_table"][i]["value"].get<unsigned long long>(),
					signal["value_table"][i]["name"].get<std::string>()));
			}
		}
		catch (std::out_of_range)
		{
			this->offset = 0.0;
			this->factor = 0.0;
			this->value_min = 0.0;
			this->value_max = 0.0;
		}

		if (signal.find("value") != signal.end())
		{
			this->value = signal.at("value").get<unsigned long long>();
		}
		else
		{
			this->value = 0;
		}

		// to calculate param value in little endian mode
		this->start_byte = this->origian_start_bit / 8 + 1;
		this->start_bit = this->origian_start_bit % 8;

		// to calculate param value in big endian mode
		this->start_bit_for_bigendian = (7 - this->origian_start_bit % 8) + (this->origian_start_bit / 8) * 8 - this->bit_length + 1;
	}

	json toJSON() const
	{
		return json({{"name", this->name},
					 {"value", (float)this->value * this->factor + this->offset},
					 {"value_name", this->get_value_name()}});
	}

	void set_value(const std::vector<unsigned char> &data_vec)
	{
		if (this->is_big_endian)
		{
			this->set_value_bigendian(data_vec);
		}
		else
		{
			this->set_value_littleendian(data_vec);
		}
	}

	void get_value(std::vector<unsigned char> &data_vec) const
	{
		if (this->is_big_endian)
		{
			this->get_value_bigendian(data_vec);
		}
		else
		{
			this->get_value_littleendian(data_vec);
		}
	}

	std::string get_value_name() const
	{
		std::map<unsigned long long, std::string>::const_iterator it = this->value_table.find(this->value);
		return it == this->value_table.end() ? std::string() : it->second;
	}

	void Value(unsigned long long value)
	{
		this->value = value;
	}

	unsigned long long Value() const
	{
		return this->value;
	}

private:
	void set_value_bigendian(const std::vector<unsigned char> &data_vec);
	void get_value_bigendian(std::vector<unsigned char> &data_vec) const;

	void set_value_littleendian(const std::vector<unsigned char> &data_vec);
	void get_value_littleendian(std::vector<unsigned char> &data_vec) const;
};

struct CANBCSignals_T
{
	typedef std::vector<CANBCSignal_T> VALUE_TYPE;
	VALUE_TYPE signals; // signals

	CANBCSignals_T(const json &_signals)
	{
		this->signals.resize(0);
		for (const auto &signal : _signals)
		{
			//std::cout<<signal<<std::endl;
			this->signals.push_back(CANBCSignal_T(signal));
		}

		//std::cout<<json::parse(this->signals)<<std::endl;
	}

	json parse(const std::vector<uint8_t> &data)
	{
		for (auto &signal : this->signals)
		{
			signal.set_value(data);
		}

		json j;
		for (auto &signal : this->signals)
		{
			j.push_back(signal.toJSON());
		}

		return j;
	}

	json convert(int length) const
	{
		std::vector<uint8_t> data(length);
		for (const auto &signal : this->signals)
		{
			signal.get_value(data);
		}

		return data;
		//return json::parse(data.begin(),data.end());
	}

	json toJSON() const
	{
		json j;
		for (const auto &signal : this->signals)
		{
			j.push_back(signal.toJSON());
		}

		return j;
	}

private:
	CANBCSignals_T() : signals()
	{
	}
};

#endif
