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

    let parsedMsg = JSON.parse(JSON.stringify(canbc.parse(msg)))
    if (!parsedMsg) return

    parsedMsg.signals.forEach(signal => {
        signal.value = signal.value * signal.factor + signal.offset
        delete signal.offset
        delete signal.start_bit
        delete signal.bit_length
        delete signal.is_big_endian
        delete signal.is_signed
        delete signal.factor
        delete signal.value_min
        delete signal.value_max
    })
    
    delete parsedMsg.attributes
    delete parsedMsg.is_extended_frame

    let toClientMsg = JSON.stringify(parsedMsg)
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(toClientMsg)
        }
    })
})

canbus.start()


