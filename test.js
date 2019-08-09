const CANBC = require('./canbc/canbc').CANBC
const canbcTemplates = require("./inc/ARS408.json")
const canbcMsg = require('./inc/test.json')

const canbc = new CANBC({ canbus: 0, templates: canbcTemplates.messages })

let canrawMsg = canbc.convert(canbcMsg)
console.log('CANRAW DATA:', canrawMsg)

let parsedMsg = canbc.parse(canrawMsg)
console.log('CANBC MSG:', parsedMsg)