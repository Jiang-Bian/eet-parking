{
  "targets": [
    {
        "target_name": "canbc",
        "sources": [ "canbc.cpp", "canbc_node.cc"],
        'include_dirs': ['/usr/lib/', "<!(node -e \"require('nan')\")"],
        
        "cflags": ["-Wall", "-std=c++11"],
    		"cflags!": [ '-fno-exceptions' ],
		    "cflags_cc!": [ '-fno-exceptions' ],
        'xcode_settings': {
            'OTHER_CFLAGS': [ "-std=c++11"],
        },
        
        'link_settings': {
      	},
		
    }]
}
