cmd_Release/obj.target/canbc/canbc.o := g++ '-DNODE_GYP_MODULE_NAME=canbc' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DBUILDING_NODE_EXTENSION' -I/home/bian/.node-gyp/10.16.0/include/node -I/home/bian/.node-gyp/10.16.0/src -I/home/bian/.node-gyp/10.16.0/deps/openssl/config -I/home/bian/.node-gyp/10.16.0/deps/openssl/openssl/include -I/home/bian/.node-gyp/10.16.0/deps/uv/include -I/home/bian/.node-gyp/10.16.0/deps/zlib -I/home/bian/.node-gyp/10.16.0/deps/v8/include -I/usr/lib -I../../node_modules/nan  -fPIC -pthread -Wall -Wextra -Wno-unused-parameter -m64 -Wall -std=c++11 -O3 -fno-omit-frame-pointer -fno-rtti -std=gnu++1y -MMD -MF ./Release/.deps/Release/obj.target/canbc/canbc.o.d.raw   -c -o Release/obj.target/canbc/canbc.o ../canbc.cpp
Release/obj.target/canbc/canbc.o: ../canbc.cpp ../canbc.h \
 ../../inc/json.hpp
../canbc.cpp:
../canbc.h:
../../inc/json.hpp:
