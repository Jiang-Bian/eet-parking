const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const WebSocket = require('express-ws')(app)
const radarCfg = require('./radarcfg')

const can = require('socketcan')
const CANBC = require('./canbc/canbc').CANBC
const canbcTemplates = require("./inc/ARS408.json")

const CANBUS = 'can0'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        console.log(msg);
    })
    console.log('accepted a client connection:', ws._socket.remoteAddress);
})

app.get('/', (req, res) => {
    res.send("200 OK")
})

app.use('/', radarCfg)

global.canbc = new CANBC({ canbus: CANBUS, templates: canbcTemplates.messages })
global.canbus = can.createRawChannel(CANBUS, true)
global.canbus.addListener("onMessage", msg => {
    let parsedMsg = JSON.parse(JSON.stringify(global.canbc.parse(msg)))
    if (!parsedMsg) return

    radarCfg.parseConfigState(parsedMsg)

    let toClientMsg = JSON.stringify(parsedMsg)
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(toClientMsg)
        }
    })
})

global.canbus.start()

let server = app.listen(8848, () => {
    var host = server.address().address
    var port = server.address().port
    console.log("Server is listening at http://%s:%s", host, port)
})