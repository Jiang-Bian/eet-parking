#include "canbc.h"
#include <boost/dynamic_bitset.hpp>
#include <limits>

void CANBCSignal_T::set_value_littleendian(const std::vector<unsigned char>& data_vec) 
{
    int rest_len 	= this->bit_length;
    int read_len	= 0;
    int sbyte 		= this->start_byte-1;
    int sbit		= this->start_bit;
    
    this->value = 0;
    boost::dynamic_bitset<> value_bitset(this->bit_length, std::numeric_limits<unsigned long long>::max());
    unsigned long long __value = value_bitset.to_ulong(); // make it to max ullong number as operand

    while (rest_len > 0) {
        //within the range of the first byte
        if (read_len == 0) {
            unsigned long long tmp_value = data_vec[sbyte] >> sbit; // read a byte value from PCAN msg
            this->value = __value & tmp_value;

            read_len = this->bit_length <= 8-sbit ? this->bit_length : 8-sbit;
            rest_len = this->bit_length - read_len;
            sbyte++;
            sbit = 0;
            continue;
        // crossing byte border and moving to the next byte
        } else {
            unsigned long long tmp_value = data_vec[sbyte]; // read a byte value from PCAN msg
            tmp_value = tmp_value << read_len;
            this->value = __value & (this->value | tmp_value);
            
            read_len += rest_len <= 8 ? rest_len : 8;
            rest_len = this->bit_length - read_len;
            sbyte++;
            
            // checking overflow
            assert(sbyte <= (int)data_vec.size()); 
        }			
    }
}

// for sending can bcmsg
void CANBCSignal_T::get_value_littleendian(std::vector<unsigned char>& data_vec) const 
{
    int rest_len 	= this->bit_length;
    int read_len	= 0;
    int sbyte 		= this->start_byte-1;
    int sbit		= this->start_bit;
    
    while (rest_len > 0) {
        //within the range of the first byte
        if (read_len == 0) {
            data_vec[sbyte] |= this->value << sbit;
            read_len = this->bit_length <= 8-sbit ? this->bit_length : 8-sbit;
            rest_len = this->bit_length - read_len;
            sbyte++;
            sbit = 0;
            continue;
        // crossing byte border and moving to the next byte
        } else {
            data_vec[sbyte] |= this->value >> read_len;
            read_len += rest_len <= 8 ? rest_len : 8;
            rest_len = this->bit_length - read_len;
            sbyte++;
            
            // checking overflow
            assert(sbyte <= (int)data_vec.size()); 
        }			
    }
}

//for parsing can msg to can bcmsg
void CANBCSignal_T::set_value_bigendian(const std::vector<unsigned char>& data_vec)
{
    unsigned long long tmpdata = 0;   
    for(size_t i = 0; i < data_vec.size() ; i++) {
        tmpdata |= (((unsigned long long)data_vec[i]  & 0xFF ) << (64 - 8 * (i + 1)));
    }
    this->value = tmpdata >> (64 - (this->start_bit_for_bigendian + this->bit_length));
    this->value &= (((unsigned long long)1 << this->bit_length) - 1);
}

//for sending can bcmsg
void CANBCSignal_T::get_value_bigendian(std::vector<unsigned char>& data_vec) const
{
    unsigned long long tmpdata = (this->value) & (((unsigned long long)1 << this->bit_length) - 1);
    tmpdata = tmpdata << (64 - (this->start_bit_for_bigendian + this->bit_length));
    for(size_t i = 0; i < data_vec.size() ; i++) {
        data_vec[i] |= (tmpdata >> (64 - 8 * (i + 1))) & 0xFF;
    }
}

