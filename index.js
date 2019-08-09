const can = require('socketcan')
const WebSocket = require('ws')
const CANBC = require('./canbc/canbc').CANBC
const canbcTemplates = require("./inc/ARS408.json")

const CANBUS = 'can0'

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
    let canMsg1 = canbc.parse(msg)
    if (!canMsg1) return

    let canMsg = JSON.parse(JSON.stringify(canMsg1))

    for (let i=0; i<canMsg.signals.length; i++) {
        canMsg.signals[i].value =  canMsg.signals[i].value *  canMsg.signals[i].factor +  canMsg.signals[i].offset
        delete  canMsg.signals[i].offset
        delete  canMsg.signals[i].start_bit
        delete  canMsg.signals[i].bit_length
        delete  canMsg.signals[i].is_big_endian
        delete  canMsg.signals[i].is_signed
        delete  canMsg.signals[i].factor
        delete  canMsg.signals[i].value_min
        delete  canMsg.signals[i].value_max
    }
    delete canMsg.attributes
    delete canMsg.is_extended_frame
    
    let toClientMsg = JSON.stringify(canMsg)
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(toClientMsg)
        }
    })
})

canbus.start()


