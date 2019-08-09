const can = require('socketcan')
const WebSocket = require('ws')
const CANBC = require('./canbc/canbc').CANBC
const canbcTemplates = require("./inc/ARS408.json")

const CANBUS = 'can0'

const canbcMsg = {
    attributes: {},
    comment: 'Quality object information',
    dlc: 7,
    id: 1548,
    is_extended_frame: false,
    name: 'Obj_2_Quality',
    signals:
        [{
            attributes: {},
            bit_length: 3,
            comment: 'Object probability of existence',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_ProbOfExist',
            offset: 0,
            start_bit: 53,
            value_max: 7,
            value_min: 0,
            value: 1,
            value_table:
                [{ name: '<=100%', value: 7 },
                { name: '<99.9%', value: 6 },
                { name: '<99%', value: 5 },
                { name: '<90%', value: 4 },
                { name: '<75%', value: 3 },
                { name: '<50%', value: 2 },
                { name: '<25%', value: 1 },
                { name: 'invalid', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 3,
            comment: 'Object measurement status',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_MeasState',
            offset: 0,
            start_bit: 50,
            value_max: 7,
            value_min: 0,
            value: 2,
            value_table:
                [{ name: 'New from merge', value: 5 },
                { name: 'Deleted for merge', value: 4 },
                { name: 'Predicted', value: 3 },
                { name: 'Measured', value: 2 },
                { name: 'New', value: 1 },
                { name: 'Deleted', value: 0 }]
        },
        {
            attributes: { GenSigStartValue: '0' },
            bit_length: 5,
            comment:
                'Object relative longitudinal acceleration standard deviation',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_ArelLong_rms',
            offset: 0,
            start_bit: 39,
            value_max: 31,
            value_min: 0,
            value: 3,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<10.000 m/s²', value: 30 },
                { name: '<7.762 m/s²', value: 29 },
                { name: '<6.025 m/s²', value: 28 },
                { name: '<4.676 m/s²', value: 27 },
                { name: '<3.630 m/s²', value: 26 },
                { name: '<2.817 m/s²', value: 25 },
                { name: '<2.187 m/s²', value: 24 },
                { name: '<1.697 m/s²', value: 23 },
                { name: '<1.317 m/s²', value: 22 },
                { name: '<1.023 m/s²', value: 21 },
                { name: '<0.794 m/s²', value: 20 },
                { name: '<0.616 m/s²', value: 19 },
                { name: '<0.478 m/s²', value: 18 },
                { name: '<0.371 m/s²', value: 17 },
                { name: '<0.288 m/s²', value: 16 },
                { name: '<0.224 m/s²', value: 15 },
                { name: '<0.174 m/s²', value: 14 },
                { name: '<0.135 m/s²', value: 13 },
                { name: '<0.105 m/s²', value: 12 },
                { name: '<0.081 m/s²', value: 11 },
                { name: '<0.063 m/s²', value: 10 },
                { name: '<0.049 m/s²', value: 9 },
                { name: '<0.038 m/s²', value: 8 },
                { name: '<0.029 m/s²', value: 7 },
                { name: '<0.023 m/s²', value: 6 },
                { name: '<0.018 m/s²', value: 5 },
                { name: '<0.014 m/s²', value: 4 },
                { name: '<0.011 m/s²', value: 3 },
                { name: '<0.008 m/s²', value: 2 },
                { name: '<0.006 m/s²', value: 1 },
                { name: '<0.005 m/s²', value: 0 }]
        },
        {
            attributes: { GenSigStartValue: '0' },
            bit_length: 5,
            comment: 'Object relative lateral acceleration standard deviation',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_ArelLat_rms',
            offset: 0,
            start_bit: 34,
            value_max: 31,
            value_min: 0,
            value: 4,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<10.000 m/s²', value: 30 },
                { name: '<7.762 m/s²', value: 29 },
                { name: '<6.025 m/s²', value: 28 },
                { name: '<4.676 m/s²', value: 27 },
                { name: '<3.630 m/s²', value: 26 },
                { name: '<2.817 m/s²', value: 25 },
                { name: '<2.187 m/s²', value: 24 },
                { name: '<1.697 m/s²', value: 23 },
                { name: '<1.317 m/s²', value: 22 },
                { name: '<1.023 m/s²', value: 21 },
                { name: '<0.794 m/s²', value: 20 },
                { name: '<0.616 m/s²', value: 19 },
                { name: '<0.478 m/s²', value: 18 },
                { name: '<0.371 m/s²', value: 17 },
                { name: '<0.288 m/s²', value: 16 },
                { name: '<0.224 m/s²', value: 15 },
                { name: '<0.174 m/s²', value: 14 },
                { name: '<0.135 m/s²', value: 13 },
                { name: '<0.105 m/s²', value: 12 },
                { name: '<0.081 m/s²', value: 11 },
                { name: '<0.063 m/s²', value: 10 },
                { name: '<0.049 m/s²', value: 9 },
                { name: '<0.038 m/s²', value: 8 },
                { name: '<0.029 m/s²', value: 7 },
                { name: '<0.023 m/s²', value: 6 },
                { name: '<0.018 m/s²', value: 5 },
                { name: '<0.014 m/s²', value: 4 },
                { name: '<0.011 m/s²', value: 3 },
                { name: '<0.008 m/s²', value: 2 },
                { name: '<0.006 m/s²', value: 1 },
                { name: '<0.005 m/s²', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 5,
            comment: 'Object relative longitudinal velocity standard deviation',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_VrelLong_rms',
            offset: 0,
            start_bit: 17,
            value_max: 31,
            value_min: 0,
            value: 5,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<10.000 m/s', value: 30 },
                { name: '<7.762 m/s', value: 29 },
                { name: '<6.025 m/s', value: 28 },
                { name: '<4.676 m/s', value: 27 },
                { name: '<3.630 m/s', value: 26 },
                { name: '<2.817 m/s', value: 25 },
                { name: '<2.187 m/s', value: 24 },
                { name: '<1.697 m/s', value: 23 },
                { name: '<1.317 m/s', value: 22 },
                { name: '<1.023 m/s', value: 21 },
                { name: '<0.794 m/s', value: 20 },
                { name: '<0.616 m/s', value: 19 },
                { name: '<0.478 m/s', value: 18 },
                { name: '<0.371 m/s', value: 17 },
                { name: '<0.288 m/s', value: 16 },
                { name: '<0.224 m/s', value: 15 },
                { name: '<0.174 m/s', value: 14 },
                { name: '<0.135 m/s', value: 13 },
                { name: '<0.105 m/s', value: 12 },
                { name: '<0.081 m/s', value: 11 },
                { name: '<0.063 m/s', value: 10 },
                { name: '<0.049 m/s', value: 9 },
                { name: '<0.038 m/s', value: 8 },
                { name: '<0.029 m/s', value: 7 },
                { name: '<0.023 m/s', value: 6 },
                { name: '<0.018 m/s', value: 5 },
                { name: '<0.014 m/s', value: 4 },
                { name: '<0.011 m/s', value: 3 },
                { name: '<0.008 m/s', value: 2 },
                { name: '<0.006 m/s', value: 1 },
                { name: '<0.005 m/s', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 5,
            comment: 'Object relative lateral velocity standard deviation',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_VrelLat_rms',
            offset: 0,
            start_bit: 28,
            value_max: 31,
            value_min: 0,
            value: 6,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<10.000 m/s', value: 30 },
                { name: '<7.762 m/s', value: 29 },
                { name: '<6.025 m/s', value: 28 },
                { name: '<4.676 m/s', value: 27 },
                { name: '<3.630 m/s', value: 26 },
                { name: '<2.817 m/s', value: 25 },
                { name: '<2.187 m/s', value: 24 },
                { name: '<1.697 m/s', value: 23 },
                { name: '<1.317 m/s', value: 22 },
                { name: '<1.023 m/s', value: 21 },
                { name: '<0.794 m/s', value: 20 },
                { name: '<0.616 m/s', value: 19 },
                { name: '<0.478 m/s', value: 18 },
                { name: '<0.371 m/s', value: 17 },
                { name: '<0.288 m/s', value: 16 },
                { name: '<0.224 m/s', value: 15 },
                { name: '<0.174 m/s', value: 14 },
                { name: '<0.135 m/s', value: 13 },
                { name: '<0.105 m/s', value: 12 },
                { name: '<0.081 m/s', value: 11 },
                { name: '<0.063 m/s', value: 10 },
                { name: '<0.049 m/s', value: 9 },
                { name: '<0.038 m/s', value: 8 },
                { name: '<0.029 m/s', value: 7 },
                { name: '<0.023 m/s', value: 6 },
                { name: '<0.018 m/s', value: 5 },
                { name: '<0.014 m/s', value: 4 },
                { name: '<0.011 m/s', value: 3 },
                { name: '<0.008 m/s', value: 2 },
                { name: '<0.006 m/s', value: 1 },
                { name: '<0.005 m/s', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 5,
            comment: 'Object orientation angle',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_Orientation_rms',
            offset: 0,
            start_bit: 45,
            value_max: 31,
            value_min: 0,
            value: 7,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<180.000 deg', value: 30 },
                { name: '<126.881 deg', value: 29 },
                { name: '<89.437 deg', value: 28 },
                { name: '<63.044 deg', value: 27 },
                { name: '<44.439 deg', value: 26 },
                { name: '<31.325 deg', value: 25 },
                { name: '<22.081 deg', value: 24 },
                { name: '<15.565 deg', value: 23 },
                { name: '<10.971 deg', value: 22 },
                { name: '<7.734 deg', value: 21 },
                { name: '<5.451 deg', value: 20 },
                { name: '<3.843 deg', value: 19 },
                { name: '<2.709 deg', value: 18 },
                { name: '<1.909 deg', value: 17 },
                { name: '<1.346 deg', value: 16 },
                { name: '<0.949 deg', value: 15 },
                { name: '<0.669 deg', value: 14 },
                { name: '<0.471 deg', value: 13 },
                { name: '<0.332 deg', value: 12 },
                { name: '<0.234 deg', value: 11 },
                { name: '<0.165 deg', value: 10 },
                { name: '<0.116 deg', value: 9 },
                { name: '<0.082 deg', value: 8 },
                { name: '<0.058 deg', value: 7 },
                { name: '<0.041 deg', value: 6 },
                { name: '<0.029 deg', value: 5 },
                { name: '<0.020 deg', value: 4 },
                { name: '<0.014 deg', value: 3 },
                { name: '<0.010 deg', value: 2 },
                { name: '<0.007 deg', value: 1 },
                { name: '<0.005 deg', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 5,
            comment: 'Object longitudinal distance standard deviation',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_DistLong_rms',
            offset: 0,
            start_bit: 11,
            value_max: 31,
            value_min: 0,
            value: 8,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<10.000 m', value: 30 },
                { name: '<7.762 m', value: 29 },
                { name: '<6.025 m', value: 28 },
                { name: '<4.676 m', value: 27 },
                { name: '<3.630 m', value: 26 },
                { name: '<2.817 m', value: 25 },
                { name: '<2.187 m', value: 24 },
                { name: '<1.697 m', value: 23 },
                { name: '<1.317 m', value: 22 },
                { name: '<1.023 m', value: 21 },
                { name: '<0.794 m', value: 20 },
                { name: '<0.616 m', value: 19 },
                { name: '<0.478 m', value: 18 },
                { name: '<0.371 m', value: 17 },
                { name: '<0.288 m', value: 16 },
                { name: '<0.224 m', value: 15 },
                { name: '<0.174 m', value: 14 },
                { name: '<0.135 m', value: 13 },
                { name: '<0.105 m', value: 12 },
                { name: '<0.081 m', value: 11 },
                { name: '<0.063 m', value: 10 },
                { name: '<0.049 m', value: 9 },
                { name: '<0.038 m', value: 8 },
                { name: '<0.029 m', value: 7 },
                { name: '<0.023 m', value: 6 },
                { name: '<0.018 m', value: 5 },
                { name: '<0.014 m', value: 4 },
                { name: '<0.011 m', value: 3 },
                { name: '<0.008 m', value: 2 },
                { name: '<0.006 m', value: 1 },
                { name: '<0.005 m', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 5,
            comment: 'Object lateral distance standard deviation',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_DistLat_rms',
            offset: 0,
            start_bit: 22,
            value_max: 31,
            value_min: 0,
            value: 9,
            value_table:
                [{ name: 'Invalid', value: 31 },
                { name: '<10.000 m', value: 30 },
                { name: '<7.762 m', value: 29 },
                { name: '<6.025 m', value: 28 },
                { name: '<4.676 m', value: 27 },
                { name: '<3.630 m', value: 26 },
                { name: '<2.817 m', value: 25 },
                { name: '<2.187 m', value: 24 },
                { name: '<1.697 m', value: 23 },
                { name: '<1.317 m', value: 22 },
                { name: '<1.023 m', value: 21 },
                { name: '<0.794 m', value: 20 },
                { name: '<0.616 m', value: 19 },
                { name: '<0.478 m', value: 18 },
                { name: '<0.371 m', value: 17 },
                { name: '<0.288 m', value: 16 },
                { name: '<0.224 m', value: 15 },
                { name: '<0.174 m', value: 14 },
                { name: '<0.135 m', value: 13 },
                { name: '<0.105 m', value: 12 },
                { name: '<0.081 m', value: 11 },
                { name: '<0.063 m', value: 10 },
                { name: '<0.049 m', value: 9 },
                { name: '<0.038 m', value: 8 },
                { name: '<0.029 m', value: 7 },
                { name: '<0.023 m', value: 6 },
                { name: '<0.018 m', value: 5 },
                { name: '<0.014 m', value: 4 },
                { name: '<0.011 m', value: 3 },
                { name: '<0.008 m', value: 2 },
                { name: '<0.006 m', value: 1 },
                { name: '<0.005 m', value: 0 }]
        },
        {
            attributes: {},
            bit_length: 8,
            comment: 'Object ID',
            factor: 1,
            is_big_endian: true,
            is_signed: false,
            name: 'Obj_ID',
            offset: 0,
            start_bit: 0,
            value: 10,
            value_max: 255,
            value_min: 0,
            value_table: []
        }]
}

const wss = new WebSocket.Server({ host: '0.0.0.0', port: 8848 })
wss
    .on('connection', ws => {
        // ws.on('message', message => {
        //     console.log(`Received message => ${message}`)
        // })
        //ws.send('Hello! Message From Server!!')
        console.log('accepted a client connection:', ws._socket.remoteAddress)
        ws.on('close', () => {
            console.log('the client disconnected:', ws._socket.remoteAddress)
        })
    })


const canbc = new CANBC({ canbus: CANBUS, templates: canbcTemplates.messages })
const canbus = can.createRawChannel(CANBUS, true)
canbus.addListener("onMessage", msg => {
    let canMsg = canbc.parse(msg)
    if (!canMsg) return
    
    for (let i=0; i<canMsg.signals.length; i++) {
        canMsg.signals[i].value =  canMsg.signals[i].value *  canMsg.signals[i].factor +  canMsg.signals[i].offset
        delete  canMsg.signals[i].start_bit
        delete  canMsg.signals[i].bit_length
        delete  canMsg.signals[i].is_big_endian
        delete  canMsg.signals[i].is_signed
        delete  canMsg.signals[i].factor
        delete  canMsg.signals[i].value_min
        delete  canMsg.signals[i].value_max
    }
    let toClientMsg = JSON.stringify(canMsg)
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(toClientMsg)
        }
    })
})

// let canrawMsg = canbc.convert(canbcMsg)
// console.log('CANRAW DATA:', canrawMsg)

// let canbcMsg1 = canbc.parse(canrawMsg)
// console.log('CANBC MSG:', canbcMsg1)

//canbus.send(canrawMsg)

canbus.start()


