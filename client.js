const WebSocket = require('ws')
const url = 'ws://localhost:8848'
const connection = new WebSocket(url)

connection.onopen = () => {
    connection.send('connected to Server!')
}

connection.onerror = (error) => {
    console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
    console.log(e.data)
}