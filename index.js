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

    let toClientMsg = JSON.stringify(parsedMsg)
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(toClientMsg)
        }
    })
})

canbus.start()


