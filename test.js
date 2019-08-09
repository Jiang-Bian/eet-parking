const CANBC = require('./canbc/canbc').CANBC
const canbcTemplates = require("./inc/ARS408.json")
const canbcMsg = require('./inc/test.json')

const canbc = new CANBC({ canbus: 0, templates: canbcTemplates.messages })

let canrawMsg = canbc.convert(canbcMsg)
console.log('CANRAW DATA:', canrawMsg)

let canbcMsg1 = canbc.parse(canrawMsg)
let parsedMsg = JSON.parse(JSON.stringify(canbcMsg1))

for (let i = 0; i < parsedMsg.signals.length; i++) {
    parsedMsg.signals[i].value = parsedMsg.signals[i].value * parsedMsg.signals[i].factor + parsedMsg.signals[i].offset
    delete parsedMsg.signals[i].start_bit
    delete parsedMsg.signals[i].bit_length
    delete parsedMsg.signals[i].is_big_endian
    delete parsedMsg.signals[i].is_signed
    delete parsedMsg.signals[i].factor
    delete parsedMsg.signals[i].value_min
    delete parsedMsg.signals[i].value_max
}
console.log('CANBC MSG:', parsedMsg)