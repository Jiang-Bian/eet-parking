const CANBC = require('./canbc/canbc').CANBC
const canbcTemplates = require("./inc/ARS408.json")
const canbcMsg = require('./inc/test.json')

const canbc = new CANBC({ canbus: 0, templates: canbcTemplates.messages })

let canrawMsg = canbc.convert(canbcMsg)
console.log('CANRAW DATA:', canrawMsg)

let parsedMsg = JSON.parse(JSON.stringify(canbc.parse(canrawMsg)))

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

console.log('CANBC MSG:', parsedMsg)