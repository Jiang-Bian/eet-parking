
#include <node.h>
#include <nan.h>

#include "canbc.h"

using v8::Array;
using v8::Context;
using v8::Function;
using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Null;
using v8::Number;
using v8::Object;
using v8::String;
using v8::Value;

#define CANBUS "CANBUS"
#define STATUS "STATUS"

NAN_METHOD(NODE_CANBC_parse)
{
	v8::Isolate *isolate = info.GetIsolate();
	v8::String::Utf8Value templates(v8::Local<v8::Value>::Cast(info[0]));
	v8::String::Utf8Value data(v8::Local<v8::Value>::Cast(info[1]));

	try
	{
		CANBCSignals_T Signals(json::parse(std::string(*templates)));
		info.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, Signals.parse(json::parse(std::string(*data))).dump().c_str()));
	}
	catch (std::exception &e)
	{
		std::cout << "exception in NODE_CANBC_parse(): " << e.what() << std::endl;
		info.GetReturnValue().Set(v8::Boolean::New(isolate, NULL));
	}

	//std::cout<<"NODE_CANBC_parse() done"<<std::endl;
}

NAN_METHOD(NODE_CANBC_convert)
{
	v8::Isolate *isolate = info.GetIsolate();
	v8::String::Utf8Value message(v8::Local<v8::Value>::Cast(info[0]));
	int length = v8::Local<v8::Value>::Cast(info[1])->Int32Value();
	try
	{
		//std::cout<<json::parse(std::string(*message))<<std::endl;
		CANBCSignals_T Signals(json::parse(std::string(*message)));
		info.GetReturnValue().Set(v8::String::NewFromUtf8(isolate, Signals.convert(length).dump().c_str()));
	}
	catch (std::exception &e)
	{
		std::cout << "exception in NODE_CANBC_convert(): " << e.what() << std::endl;
		info.GetReturnValue().Set(v8::Boolean::New(isolate, NULL));
	}

	//std::cout<<"NODE_CANBC_convert() done"<<std::endl;
}

NAN_MODULE_INIT(init)
{
	Nan::Export(target, "parse", NODE_CANBC_parse);
	Nan::Export(target, "convert", NODE_CANBC_convert);
}

NODE_MODULE(canbc, init)
