const canbc = require("./canbc.js");
const fs = require("fs");

var templates =   {
    "messages": [
        {
            "attributes": {
                "GenMsgCycleTime": "1000",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 5,
            "id": 850,
            "is_extended_frame": false,
            "name": "VCU_10",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Low battery charging status ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LVBattChgSts",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "12V battery State of Charge (SOC) status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LVBattSOCSts",
                    "offset": 0.0,
                    "start_bit": 28
                },
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "1"
                    },
                    "bit_length": 2,
                    "comment": "12V battery voltage status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LVBattUSts",
                    "offset": 0.0,
                    "start_bit": 6
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Low voltage battery warning ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCULvBattWarn",
                    "offset": 0.0,
                    "start_bit": 30
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 14,
                    "comment": "12V battery voltage   ",
                    "factor": 0.000976563,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LVBattU",
                    "offset": 3.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "12V battery State of Charge (SOC)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LVBattSOC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Load shed   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LoadShed",
                    "offset": 0.0,
                    "start_bit": 24
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 6,
            "id": 535,
            "is_extended_frame": false,
            "name": "VCU_05",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCU_05_CRC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 9,
                    "comment": " ",
                    "factor": 0.5,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "CruiseStoredSpeed",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "VCU target gear   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUTargetGear",
                    "offset": 0.0,
                    "start_bit": 28
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "CruiseStatus",
                    "offset": 0.0,
                    "start_bit": 34
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUBrkLampReq",
                    "offset": 0.0,
                    "start_bit": 17
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "VCU actual gear   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUActGear",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCURvsLampReq",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCU_05_MsgCntr",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUPtWakeupReq",
                    "offset": 0.0,
                    "start_bit": 18
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUActGearValid",
                    "offset": 0.0,
                    "start_bit": 27
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUEPBReq",
                    "offset": 0.0,
                    "start_bit": 38
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": " ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VCUTargetGearValid",
                    "offset": 0.0,
                    "start_bit": 31
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 7,
            "id": 671,
            "is_extended_frame": false,
            "name": "SWC_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Menu left push switch status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "MenuLePushSwtSts",
                    "offset": 0.0,
                    "start_bit": 42
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "ACC speed increase or resume switch status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AccSpdIncOrResuSwtSts",
                    "offset": 0.0,
                    "start_bit": 50
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "SWC_01_CRC ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SWC_01_CRC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "ACC speed decrease push status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AccSpdDecSwtSts",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Menu  or volume down push switch status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "MenuOrVolDwnPushSwtSts",
                    "offset": 0.0,
                    "start_bit": 36
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Steering Wheel Module (SWC) fail status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SWCFailSts",
                    "offset": 0.0,
                    "start_bit": 52
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "SWC_01_MsgCntr",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SWC_01_MsgCntr",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Mode togggle decrease switch status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ModeTogDecSwtSts",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Menu right push switch status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "MenuRiPushSwtSts",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Menu  or volume up push switch status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "MenuOrVolUpPushSwtSts",
                    "offset": 0.0,
                    "start_bit": 34
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "ACC timegap Decrease switch status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AccTimeGapDecSwtSts",
                    "offset": 0.0,
                    "start_bit": 28
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Spare 01 push switch Status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Spare01PushSwtSts",
                    "offset": 0.0,
                    "start_bit": 46
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Selection push switch status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SelnPushSwtSts",
                    "offset": 0.0,
                    "start_bit": 54
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Active Cruise Control (ACC) command push switch status  Activate - Set - Resume    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AccSetSwtSts",
                    "offset": 0.0,
                    "start_bit": 18
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "NOMI (Voice control) push switch status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NOMICtrlPushSwtSts",
                    "offset": 0.0,
                    "start_bit": 44
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "ACC timegap increase switch status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AccTimeGapIncSwtSts",
                    "offset": 0.0,
                    "start_bit": 30
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Mode toggle increase switch status   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ModeTogIncSwtSts",
                    "offset": 0.0,
                    "start_bit": 26
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Menu push switch  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "MenuPushSwtSts",
                    "offset": 0.0,
                    "start_bit": 20
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 8,
            "id": 140,
            "is_extended_frame": false,
            "name": "PEUR_VCU_8C",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 15,
                    "comment": "Rear Motor Actual Torque   ",
                    "factor": 0.125,
                    "is_big_endian": true,
                    "is_signed": true,
                    "name": "PEURMotActTq",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Motor Speed rear validity ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEURMotSpdValid",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Rolling Counter   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEUR_VCU_8C_MsgCntr",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 16,
                    "comment": "Motor Speed rear   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": true,
                    "name": "PEURMotSpd",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "CRC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEUR_VCU_8C_CRC",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Rear Motor Actual Torque validity   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEURMotActTqValid",
                    "offset": 0.0,
                    "start_bit": 7
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 8,
            "id": 132,
            "is_extended_frame": false,
            "name": "PEUF_VCU_84",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 16,
                    "comment": "Motor Speed  front   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": true,
                    "name": "PEUFMotSpd",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "CRC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEUF_VCU_84_CRC",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Rolling Counter   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEUF_VCU_84_MsgCntr",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Motor Speed  front  validity ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEUFMotSpdValid",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Front Motor Actual Torque validity ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PEUFMotActTqValid",
                    "offset": 0.0,
                    "start_bit": 7
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 15,
                    "comment": "Front Motor Actual Torque   ",
                    "factor": 0.125,
                    "is_big_endian": true,
                    "is_signed": true,
                    "name": "PEUFMotActTq",
                    "offset": 0.0,
                    "start_bit": 8
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8",
                "NmAsrMessage": "1"
            },
            "comment": null,
            "dlc": 8,
            "id": 1322,
            "is_extended_frame": false,
            "name": "NM_SWC",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 1 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData1_SWC",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 5 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData5_SWC",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 3 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData3_SWC",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector SWC\nActive wakeup - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ActvWakeup_SWC",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector SWC\nNetwork management coordinator sleep ready - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorrSleepRdy_SWC",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector SWC Repeat Message Request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "RepMsgReq_SWC",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector SWC\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit1_SWC",
                    "offset": 0.0,
                    "start_bit": 13
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 0 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData0_SWC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 2 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData2_SWC",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 4 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData4_SWC",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Control bit vector SWC\nNetwork management coordination - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorn_SWC",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector SWC\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit2_SWC",
                    "offset": 0.0,
                    "start_bit": 15
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector SWC\nPartial network information - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PtlNetInfo_SWC",
                    "offset": 0.0,
                    "start_bit": 14
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Source node identifier SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ScrNodId_SWC",
                    "offset": 0.0,
                    "start_bit": 0
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8",
                "NmAsrMessage": "1"
            },
            "comment": null,
            "dlc": 8,
            "id": 1334,
            "is_extended_frame": false,
            "name": "NM_ICS",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Source node identifier ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ScrNodId_ICS",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 3 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData3_ICS",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector ICS\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit2_ICS",
                    "offset": 0.0,
                    "start_bit": 15
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector ICS\nNetwork management coordinator sleep ready - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorrSleepRdy_ICS",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 1 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData1_ICS",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 5 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData5_ICS",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector ICS\nActive wakeup - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ActvWakeup_ICS",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 2 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData2_ICS",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Control bit vector ICS\nNetwork management coordination - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorn_ICS",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector ICS Repeat Message Request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "RepMsgReq_ICS",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 0 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData0_ICS",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector ICS\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit1_ICS",
                    "offset": 0.0,
                    "start_bit": 13
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector ICS\nPartial network information - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PtlNetInfo_ICS",
                    "offset": 0.0,
                    "start_bit": 14
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 4 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData4_ICS",
                    "offset": 0.0,
                    "start_bit": 48
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8",
                "NmAsrMessage": "1"
            },
            "comment": null,
            "dlc": 8,
            "id": 1331,
            "is_extended_frame": false,
            "name": "NM_IC",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector IC\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit1_IC",
                    "offset": 0.0,
                    "start_bit": 13
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 4 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData4_IC",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector IC Repeat Message Request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "RepMsgReq_IC",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 0 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData0_IC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 1 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData1_IC",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Source node identifier IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ScrNodId_IC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 5 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData5_IC",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector IC\nActive wakeup - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ActvWakeup_IC",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector IC\nPartial network information - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PtlNetInfo_IC",
                    "offset": 0.0,
                    "start_bit": 14
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Control bit vector IC\nNetwork management coordination - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorn_IC",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector IC\nNetwork management coordinator sleep ready - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorrSleepRdy_IC",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 2 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData2_IC",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector IC\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit2_IC",
                    "offset": 0.0,
                    "start_bit": 15
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 3 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData3_IC",
                    "offset": 0.0,
                    "start_bit": 40
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8",
                "NmAsrMessage": "1"
            },
            "comment": null,
            "dlc": 8,
            "id": 1333,
            "is_extended_frame": false,
            "name": "NM_HUD",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector HUD\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit1_HUD",
                    "offset": 0.0,
                    "start_bit": 13
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector HUD\nPartial network information - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PtlNetInfo_HUD",
                    "offset": 0.0,
                    "start_bit": 14
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector HUD\nActive wakeup - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ActvWakeup_HUD",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 1 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData1_HUD",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 0 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData0_HUD",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector HUD Repeat Message Request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "RepMsgReq_HUD",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 3 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData3_HUD",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Source node identifier HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ScrNodId_HUD",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector HUD\nNetwork management coordinator sleep ready - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorrSleepRdy_HUD",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Control bit vector HUD\nNetwork management coordination - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorn_HUD",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector HUD\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit2_HUD",
                    "offset": 0.0,
                    "start_bit": 15
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 2 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData2_HUD",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 4 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData4_HUD",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 5 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData5_HUD",
                    "offset": 0.0,
                    "start_bit": 56
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8",
                "NmAsrMessage": "1"
            },
            "comment": null,
            "dlc": 8,
            "id": 1285,
            "is_extended_frame": false,
            "name": "NM_CGW",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 4 CGW   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData4_CGW",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector CGW Network management coordinator sleep ready - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorrSleepRdy_CGW",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 1 CGW   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData1_CGW",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector CGW Repeat Message Request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "RepMsgReq_CGW",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 0 CGW   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData0_CGW",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector CGW Active wakeup - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ActvWakeup_CGW",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector CGW Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit1_CGW",
                    "offset": 0.0,
                    "start_bit": 13
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 3 CGW   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData3_CGW",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Control bit vector CGW Network management coordination - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorn_CGW",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector CGW Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit2_CGW",
                    "offset": 0.0,
                    "start_bit": 15
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 2 CGW   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData2_CGW",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Source node identifier CGW  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ScrNodId_CGW",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector CGW Partial network information - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PtlNetInfo_CGW",
                    "offset": 0.0,
                    "start_bit": 14
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 5 CGW   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData5_CGW",
                    "offset": 0.0,
                    "start_bit": 56
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8",
                "NmAsrMessage": "1"
            },
            "comment": null,
            "dlc": 8,
            "id": 1335,
            "is_extended_frame": false,
            "name": "NM_AMP",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector AMP\nPartial network information - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PtlNetInfo_AMP",
                    "offset": 0.0,
                    "start_bit": 14
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector AMP Repeat Message Request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "RepMsgReq_AMP",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Control bit vector AMP\nNetwork management coordination - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorn_AMP",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 3 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData3_AMP",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Source node identifier AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ScrNodId_AMP",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 1 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData1_AMP",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 2 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData2_AMP",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector AMP\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit2_AMP",
                    "offset": 0.0,
                    "start_bit": 15
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector AMP\nNetwork management coordinator sleep ready - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "NetMngtCoorrSleepRdy_AMP",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 0 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData0_AMP",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector AMP\nReserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ResdBit1_AMP",
                    "offset": 0.0,
                    "start_bit": 13
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Control bit vector AMP\nActive wakeup - Reserved   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ActvWakeup_AMP",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 5 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData5_AMP",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "User data 4 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "UsrData4_AMP",
                    "offset": 0.0,
                    "start_bit": 48
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 2,
            "id": 741,
            "is_extended_frame": false,
            "name": "IC_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "IC warning/failure ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IC_WarningRsp",
                    "offset": 0.0,
                    "start_bit": 2
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 10,
                    "comment": "IC light sensor ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IC_LiSnsr",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "IC photo sensor defect ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IC_PhotoSnsrDfct",
                    "offset": 0.0,
                    "start_bit": 6
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 2,
            "id": 776,
            "is_extended_frame": false,
            "name": "HUD_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "HUD warning/failure ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "HUD_WarningRsp",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "HUD status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "HUDSts",
                    "offset": 0.0,
                    "start_bit": 0
                }
            ]
        },
        {
            "attributes": {
                "DiagResponse": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1706,
            "is_extended_frame": false,
            "name": "DIAG_RESP_SWC",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 1 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData1_SWC",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 5 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData5_SWC",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 3 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData3_SWC",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 6 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData6_SWC",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 0 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData0_SWC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 2 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData2_SWC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 7 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData7_SWC",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 4 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData4_SWC",
                    "offset": 0.0,
                    "start_bit": 32
                }
            ]
        },
        {
            "attributes": {
                "DiagResponse": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1718,
            "is_extended_frame": false,
            "name": "DIAG_RESP_ICS",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 5 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData5_ICS",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 0 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData0_ICS",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 6 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData6_ICS",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 7 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData7_ICS",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 3 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData3_ICS",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 2 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData2_ICS",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 4 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData4_ICS",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 1 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData1_ICS",
                    "offset": 0.0,
                    "start_bit": 8
                }
            ]
        },
        {
            "attributes": {
                "DiagResponse": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1715,
            "is_extended_frame": false,
            "name": "DIAG_RESP_IC",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 6 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData6_IC",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 2 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData2_IC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 4 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData4_IC",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 0 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData0_IC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 1 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData1_IC",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 5 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData5_IC",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 3 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData3_IC",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 7 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData7_IC",
                    "offset": 0.0,
                    "start_bit": 56
                }
            ]
        },
        {
            "attributes": {
                "DiagResponse": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1717,
            "is_extended_frame": false,
            "name": "DIAG_RESP_HUD",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 5 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData5_HUD",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 3 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData3_HUD",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 2 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData2_HUD",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 0 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData0_HUD",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 1 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData1_HUD",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 7 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData7_HUD",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 4 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData4_HUD",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 6 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData6_HUD",
                    "offset": 0.0,
                    "start_bit": 48
                }
            ]
        },
        {
            "attributes": {
                "DiagResponse": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1719,
            "is_extended_frame": false,
            "name": "DIAG_RESP_AMP",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 0 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData0_AMP",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 1 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData1_AMP",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 5 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData5_AMP",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 6 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData6_AMP",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 3 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData3_AMP",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 2 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData2_AMP",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 7 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData7_AMP",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic response data 4 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagRespData4_AMP",
                    "offset": 0.0,
                    "start_bit": 32
                }
            ]
        },
        {
            "attributes": {
                "DiagRequest": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1578,
            "is_extended_frame": false,
            "name": "DIAG_REQ_SWC",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 0 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData0_SWC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 2 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData2_SWC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 7 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData7_SWC",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 1 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData1_SWC",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 6 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData6_SWC",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 3 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData3_SWC",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 4 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData4_SWC",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 5 SWC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData5_SWC",
                    "offset": 0.0,
                    "start_bit": 40
                }
            ]
        },
        {
            "attributes": {
                "DiagRequest": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1590,
            "is_extended_frame": false,
            "name": "DIAG_REQ_ICS",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 4 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData4_ICS",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 2 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData2_ICS",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 0 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData0_ICS",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 3 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData3_ICS",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 1 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData1_ICS",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 5 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData5_ICS",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 7 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData7_ICS",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 6 ICS   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData6_ICS",
                    "offset": 0.0,
                    "start_bit": 48
                }
            ]
        },
        {
            "attributes": {
                "DiagRequest": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1587,
            "is_extended_frame": false,
            "name": "DIAG_REQ_IC",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 4 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData4_IC",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 0 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData0_IC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 2 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData2_IC",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 3 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData3_IC",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 5 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData5_IC",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 1 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData1_IC",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 6 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData6_IC",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 7 IC   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData7_IC",
                    "offset": 0.0,
                    "start_bit": 56
                }
            ]
        },
        {
            "attributes": {
                "DiagRequest": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1589,
            "is_extended_frame": false,
            "name": "DIAG_REQ_HUD",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 2 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData2_HUD",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 4 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData4_HUD",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 1 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData1_HUD",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 3 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData3_HUD",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 7 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData7_HUD",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 0 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData0_HUD",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 6 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData6_HUD",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 5 HUD   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData5_HUD",
                    "offset": 0.0,
                    "start_bit": 40
                }
            ]
        },
        {
            "attributes": {
                "DiagState": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1537,
            "is_extended_frame": false,
            "name": "DIAG_REQ_AllECU",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 2 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData2_AllECU",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 3 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData3_AllECU",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 7 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData7_AllECU",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 5 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData5_AllECU",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 6 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData6_AllECU",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 4 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData4_AllECU",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 0 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData0_AllECU",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 1 for all ECUs (Functional address mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData1_AllECU",
                    "offset": 0.0,
                    "start_bit": 8
                }
            ]
        },
        {
            "attributes": {
                "DiagRequest": "1",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1591,
            "is_extended_frame": false,
            "name": "DIAG_REQ_AMP",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 0 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData0_AMP",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 2 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData2_AMP",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 3 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData3_AMP",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 6 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData6_AMP",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 7 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData7_AMP",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 4 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData4_AMP",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 1 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData1_AMP",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "Diagnostic request data 5 AMP   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "DiagReqData5_AMP",
                    "offset": 0.0,
                    "start_bit": 40
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "1000",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 6,
            "id": 946,
            "is_extended_frame": false,
            "name": "CGW_TCU_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "Year\nInvalid values FF     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Yr",
                    "offset": 2000.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 5,
                    "comment": "Hour\nInvalid values 18 - 1F     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Hr",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 6,
                    "comment": "Minute\nInvalid values 3C - 3F     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Min",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 5,
                    "comment": "Day     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Day",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Month Invalid value F     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Mth",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 6,
                    "comment": "Second\nInvalid values 3C - 3F     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "Sec",
                    "offset": 0.0,
                    "start_bit": 40
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 6,
            "id": 774,
            "is_extended_frame": false,
            "name": "CGW_INTR_LI",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Interior illumination status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IntrIllmnSts",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Puddle light rear left command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PuddleLiReLeCmd",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Ligth switched on reminder warning request  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "LiSwtOnRmnWarnReq",
                    "offset": 0.0,
                    "start_bit": 2
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Interior light foot-well command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IntrLiFootWellCmd",
                    "offset": 0.0,
                    "start_bit": 34
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 7,
                    "comment": "Back light duty cycle ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BackLiDutyCycCmd",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Ambient light mode set status ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AmbLiModSetSts",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Puddle light front left (driver) command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PuddleLiFrntLeCmd",
                    "offset": 0.0,
                    "start_bit": 36
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Trunk illumination status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "TrkIllmnSts",
                    "offset": 0.0,
                    "start_bit": 10
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Backlight brightness set status  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BackLiBriSetSts",
                    "offset": 0.0,
                    "start_bit": 4
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Backlight mode status  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BackLiModSts",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Puddle light front right (passanger) command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PuddleLiFrntRiCmd",
                    "offset": 0.0,
                    "start_bit": 38
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Ambient light status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AmbLiSts",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Cabine ligh setting status\nDefine if cabin ligth are enabled if door openened ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "CbnLiSetSts",
                    "offset": 0.0,
                    "start_bit": 46
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Puddle light trunk command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PuddleLiTrCmd",
                    "offset": 0.0,
                    "start_bit": 44
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Interior light rear reader command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IntrLiReReaderCmd",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Puddle light rear right command ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PuddleLiReRiCmd",
                    "offset": 0.0,
                    "start_bit": 42
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "100",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 2,
            "id": 707,
            "is_extended_frame": false,
            "name": "CGW_02",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Immobilizer status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ImobSts",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Comfort enable  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ComfEna",
                    "offset": 0.0,
                    "start_bit": 2
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Vehicle state (Replaces vehicle power mode)   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehState",
                    "offset": 0.0,
                    "start_bit": 4
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "key authentication status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "KeyAuthSts",
                    "offset": 0.0,
                    "start_bit": 10
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTimeFast": "100",
                "GenMsgILSupport": "1",
                "GenMsgNrOfRepetition": "3",
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 2,
            "id": 1197,
            "is_extended_frame": false,
            "name": "CDC_IC_03",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "2"
                    },
                    "bit_length": 1,
                    "comment": "Chime front middle request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ChimeFrntMiReq",
                    "offset": 0.0,
                    "start_bit": 2
                },
                {
                    "attributes": {
                        "GenSigSendType": "2"
                    },
                    "bit_length": 1,
                    "comment": "Chime front left request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ChimeFrntLeReq",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "2"
                    },
                    "bit_length": 1,
                    "comment": "Chime rear right request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ChimeReRiReq",
                    "offset": 0.0,
                    "start_bit": 4
                },
                {
                    "attributes": {
                        "GenSigSendType": "2"
                    },
                    "bit_length": 1,
                    "comment": "Chime rear left request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ChimeReLeReq",
                    "offset": 0.0,
                    "start_bit": 3
                },
                {
                    "attributes": {
                        "GenSigSendType": "2"
                    },
                    "bit_length": 1,
                    "comment": "Chime front right request   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ChimeFrntRiReq",
                    "offset": 0.0,
                    "start_bit": 1
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "1000",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 3,
            "id": 938,
            "is_extended_frame": false,
            "name": "CDC_IC_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 24,
                    "comment": "Vehicle odometer\nInvalid value FFFFFF     ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehOdometer",
                    "offset": 0.0,
                    "start_bit": 16
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "1000",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 8,
            "id": 915,
            "is_extended_frame": false,
            "name": "CDC_HU_14",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Backlight mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BackLiMod",
                    "offset": 0.0,
                    "start_bit": 51
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Interior illumination On Off  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IntrIllmnOnOff",
                    "offset": 0.0,
                    "start_bit": 6
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Backlight brightness set  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BackLiBriSet",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Ambient light On Off   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AmbLiOnOff",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Trunk illumination On Off  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "TrIllmnOnOff",
                    "offset": 0.0,
                    "start_bit": 4
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Cabine ligh setting\nDefine if cabin ligth are enabled if door openened ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "CbnLiSet",
                    "offset": 0.0,
                    "start_bit": 18
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 7,
                    "comment": "Instrument cluster LCD backlight request ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "IC_LCDbackLiReq",
                    "offset": 0.0,
                    "start_bit": 8
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "50",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 8,
            "id": 430,
            "is_extended_frame": false,
            "name": "CDC_HU_13",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "12"
                    },
                    "bit_length": 5,
                    "comment": "Set amplifier media balance Invalid values 0x18 - 0x1F   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetAmplfrMediaBal",
                    "offset": -12.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Set speed compensate volume    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SpdCmpVolDB",
                    "offset": 0.0,
                    "start_bit": 35
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 5,
                    "comment": "Set amplifier main volume\n31    Invalid value ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetAmplfrMaiVol",
                    "offset": 0.0,
                    "start_bit": 3
                },
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "12"
                    },
                    "bit_length": 5,
                    "comment": "Set amplifier media fade Invalid values 0x18 - 0x1F   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetAmplfrMediaFade",
                    "offset": -12.0,
                    "start_bit": 19
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Set motor sound    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetMotSound",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Set amplifier mode    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetAmplfrMode",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 24,
                    "comment": "Set amplifier EQ ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetAmplfrEQ",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Set amplifier main source    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SetAmplfrMaiSrc",
                    "offset": 0.0,
                    "start_bit": 27
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "50",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 6,
            "id": 431,
            "is_extended_frame": false,
            "name": "CDC_HU_12",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "1"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle power steering mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehPwrSteerModReq",
                    "offset": 0.0,
                    "start_bit": 19
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle suspension mode.(Height and stiffness)",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehSuspModReq",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "Vehicle ambient light mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehAmbLiModReq",
                    "offset": 0.0,
                    "start_bit": 35
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle IC mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehICModReq",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle driving mode    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehDrvgMod",
                    "offset": 0.0,
                    "start_bit": 5
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle regeneration mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehRgnModReq",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle acceleration mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehAModReq",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle brake pedal mode request  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehBrkPedlModReq",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Vehicle motor sound mode  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehMotSoundModRe",
                    "offset": 0.0,
                    "start_bit": 40
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "200",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 3,
            "id": 683,
            "is_extended_frame": false,
            "name": "CDC_HU_06",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 7,
                    "comment": "HUD display brigthness    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "HUD_LCDbackLiReq",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 7,
                    "comment": "Head Up Display (HUD) position setting    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PositionReq",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "HUD on/off request ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "HUD_Cmd",
                    "offset": 0.0,
                    "start_bit": 16
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "20",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 8,
            "id": 91,
            "is_extended_frame": false,
            "name": "BCU_04",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "BCU_04 CRC      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BCU_04_CRC",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Electric Park Brake (EPB) status      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "EPBSts",
                    "offset": 0.0,
                    "start_bit": 51
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "BCU_04 Message counter      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BCU_04_MsgCntr",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "BCU brake light request      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BCUBrkLiReq",
                    "offset": 0.0,
                    "start_bit": 9
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Vehicle moving direction      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehMovgDir",
                    "offset": 0.0,
                    "start_bit": 21
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 13,
                    "comment": "Vehicle speed. Invalid values 1901 - 1FFF      ",
                    "factor": 0.05625,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehSpd",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 9,
                    "comment": "Brake Pressure Invalid values 0x1D5 - 0x1FF      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BrkPress",
                    "offset": -42.5,
                    "start_bit": 47
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Hazard warning (HAZ) request      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "HAZReq",
                    "offset": 0.0,
                    "start_bit": 11
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Brake overheat   ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BrkOverHeat",
                    "offset": 0.0,
                    "start_bit": 50
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "No brake force applied on the wheel or No brake pressure applied?      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BCU_NoBrkF",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "15"
                    },
                    "bit_length": 5,
                    "comment": "Brake Pressure Offset.Required by Front Radar. What does it mean?      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BrkPressOffset",
                    "offset": -15.0,
                    "start_bit": 42
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Brake pressure Validity      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BrkPressValid",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Electric Park Brake (EPB) switch status      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "EPBSwtSts",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Brake pedal status.      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BrkPedlSts",
                    "offset": 0.0,
                    "start_bit": 54
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Vehicle speed validity and initialization status      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "VehSpdSts",
                    "offset": 0.0,
                    "start_bit": 23
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Brake pressure offset validity      ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "BrkPressOffsetValid",
                    "offset": 0.0,
                    "start_bit": 41
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1201,
            "is_extended_frame": false,
            "name": "AMP_DEVLP_02",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig05 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig05",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig06 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig06",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig04 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig04",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig08 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig08",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig07 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig07",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig01 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig01",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig02 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig02",
                    "offset": 0.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_RX_Sig03 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Rx_Sig03",
                    "offset": 0.0,
                    "start_bit": 16
                }
            ]
        },
        {
            "attributes": {
                "GenMsgSendType": "8"
            },
            "comment": null,
            "dlc": 8,
            "id": 1200,
            "is_extended_frame": false,
            "name": "AMP_DEVLP_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig08 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig08",
                    "offset": 0.0,
                    "start_bit": 56
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig05 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig05",
                    "offset": 0.0,
                    "start_bit": 32
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig03 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig03",
                    "offset": 0.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig01 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig01",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig04 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig04",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig07 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig07",
                    "offset": 0.0,
                    "start_bit": 48
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig06 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig06",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "7"
                    },
                    "bit_length": 8,
                    "comment": "AMP_TX_Sig02 for development and calibration  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_Tx_Sig02",
                    "offset": 0.0,
                    "start_bit": 8
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "200",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 6,
            "id": 836,
            "is_extended_frame": false,
            "name": "AMP_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 24,
                    "comment": "amplifier media EQ response  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_EQSts",
                    "offset": 0.0,
                    "start_bit": 40
                },
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "12"
                    },
                    "bit_length": 5,
                    "comment": "amplifier media balance response  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_MediaBalanceSts",
                    "offset": -12.0,
                    "start_bit": 16
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Engine speed compensate volume status ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "EngSpdCmpVolSts",
                    "offset": 0.0,
                    "start_bit": 5
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 3,
                    "comment": "Amplifier Tuning mode status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "TunModSts",
                    "offset": 0.0,
                    "start_bit": 0
                },
                {
                    "attributes": {
                        "GenSigSendType": "0",
                        "GenSigStartValue": "12"
                    },
                    "bit_length": 5,
                    "comment": "amplifier media fade response ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AMP_MediaFadeSts",
                    "offset": -12.0,
                    "start_bit": 8
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "simulate engine sound inside vehicle during sporty mode    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ESSSoundSts",
                    "offset": 0.0,
                    "start_bit": 3
                }
            ]
        },
        {
            "attributes": {
                "GenMsgCycleTime": "20",
                "GenMsgILSupport": "1",
                "GenMsgSendType": "0"
            },
            "comment": null,
            "dlc": 4,
            "id": 60,
            "is_extended_frame": false,
            "name": "ACM_01",
            "signals": [
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Seat occupant front right (passenger) status  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SeatOccptFrntRiSts",
                    "offset": 0.0,
                    "start_bit": 18
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 4,
                    "comment": "ACM_01 message counter    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ACM_01_MsgCntr",
                    "offset": 0.0,
                    "start_bit": 12
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Passenger airbag inhibition lamp request  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "PassAirbgInhbnLampReq",
                    "offset": 0.0,
                    "start_bit": 26
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Seatbelt front left status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SeatBltFrntLeSts",
                    "offset": 0.0,
                    "start_bit": 23
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Seatbelt middle row middle status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SeatBltMidRowMidSts",
                    "offset": 0.0,
                    "start_bit": 20
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Seatbelt middle row right status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SeatBltMidRowRiSts",
                    "offset": 0.0,
                    "start_bit": 19
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Crash detection status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "CrashDetd",
                    "offset": 0.0,
                    "start_bit": 10
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Seatbelt front right status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SeatBltFrntRiSts",
                    "offset": 0.0,
                    "start_bit": 22
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 1,
                    "comment": "Seatbelt middle row left status    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "SeatBltMidRowLeSts",
                    "offset": 0.0,
                    "start_bit": 21
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 2,
                    "comment": "Airbag warning lamp request  ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "AirbWarnReq",
                    "offset": 0.0,
                    "start_bit": 24
                },
                {
                    "attributes": {
                        "GenSigSendType": "0"
                    },
                    "bit_length": 8,
                    "comment": "ACM_01 CRC    ",
                    "factor": 1.0,
                    "is_big_endian": true,
                    "is_signed": false,
                    "name": "ACM_01_CRC",
                    "offset": 0.0,
                    "start_bit": 0
                }
            ]
        }
    ]
};

// node test_canbc.js dbc_templates.json
if (process.argv.length <= 2) {
    console.log("no template file specified, using default templates");
} else {
    var template_file = process.argv[2];
    if (!fs.existsSync(template_file)) {
        console.log("unable to open the template file: "+template_file+", using default templates");
    } else {
        console.log("using the template file: "+template_file);
        templates = JSON.parse(fs.readFileSync(template_file));
    }
}

var canbus = 100;
var index   = 0;

var listener = canbc.functions.init(canbus, templates);

console.dir(canbc.functions.getIdNameDict(canbus),{depth:null});

if(listener) {
    canbc.functions.setRule(100, {
        id: 850,
        msgGroup: [{
            start: 0,
            cycle: 400,
            muxVal: 0
        }, {
            start: 200,
            cycle: 800,
            muxVal: 1
        }, {
            start: 600,
            cycle: 800,
            muxVal: 2
        }],
        muxValGroup: {
            0: [0,1,2,3],
            1: [0,2,4,6,7],
            2: [0,3,8,5,9]
        },
        muxPos: 0
    })
    listener.on('CANBC_set', (canbus, canmsg, cycleTime) => {
            var ret = canbc.functions.parseCanbcmsg(canbus, canmsg);
            if (ret.isCANBC)
                console.log("parsed canbcmsg on CANBUS: "+canbus+" at CYCLETIME: "+cycleTime+", "+JSON.stringify(ret.CANBCMSG));
            else
            console.log("failed to parse CAN message, isCANBC: "+ret.isCANBC);

            // CAUTION: to avoid call stack overflow
            // if (index++ < 1)
            //     canbc.functions.set_canbcmsg(canbus, ret.CANBCMSG);
        });

    listener.on('CANBC_parsed', (canbus, parsed_msg) => {
            console.log("parsed canbcmsg on CANBUS: "+canbus+", "+JSON.stringify(parsed_msg));
        });

    var canid = 850;
    var getting_ret = canbc.functions.getCycletime(canbus, canid);
    console.log("BEFORE: get cycletime of CANBC ID: "+canid+" is: "+getting_ret.STATUS+", cycleTime is: "+getting_ret.CYCLETIME);

    var cycletime   = 1000;
    var set_cycletime_ret = canbc.functions.setCycletime(canbus, canid, 1000);
    console.log("set cycletime of CANBC ID: "+canid+" to: "+cycletime+" is: "+ set_cycletime_ret);

    canid = 850;
    getting_ret = canbc.functions.getCycletime(canbus, canid);
    console.log("AFTER: get cycletime of CANBC ID: "+canid+" is: "+getting_ret.STATUS+", cycleTime is: "+getting_ret.CYCLETIME);

    var canbcmsg_in = {"ID":850, "MSGTYPE":0, "LEN":8, "signals":[{"pos":0, "value":0},{"pos":1, "value":1},{"pos":2, "value":2},{"pos":3, "value":3},{"pos":4, "value":4},{"pos":5, "value":5},{"pos":6, "value":6},{"pos":7, "value":7}] };
    var ret = canbc.functions.setCanbcmsg(canbus, canbcmsg_in);
    if (ret.isCANBC)
        console.log("set canbcmsg: "+JSON.stringify(ret.CANBCMSG));
    else
        console.log("failed to set CANBC message, isCANBC: "+ret.isCANBC);

    canbcmsg_in = {"ID":469735956, "MSGTYPE":0, "LEN":8, "signals":[{"pos":0, "value":1}]}
    ret = canbc.functions.setCanbcmsg(canbus, canbcmsg_in);
    if (ret.isCANBC)
        console.log("set canbcmsg: "+JSON.stringify(ret.CANBCMSG));
    else
        console.log("failed to set CANBC message, isCANBC: "+ret.isCANBC);
    
    setTimeout(function(){console.log("test finished!")}, 0);
} else {
    console.log("failed to init canbc moudle");
}