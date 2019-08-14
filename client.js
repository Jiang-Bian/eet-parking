const WebSocket = require('ws')

const client = new WebSocket('ws://localhost:8848')
client
    .on('open', () => {
        //client.send('Hello from client')
        console.log('connected to Server!')
    })
    .on('error', (error) => {
        console.log(error)
    })
    .on('message', (e) => {
        console.log(e.data)
    })