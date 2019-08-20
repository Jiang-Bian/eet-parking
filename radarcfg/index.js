let router = require('express').Router()

let configState = {}

module.exports.parseConfigState = function (parsedMsg) {
    switch (parsedMsg.id) {
        case 0x201:
            break

        case 0x203: //FilterState_Header to FilterCfg
            break

        case 0x204: //Cluster and Object filter configuration state to FilterCfg
            break

        case 0x408: //CollDetState, Collision detection state
            break
    }
    return
}

router.get('/RadarCfg', (req, res) => {
    res.send('RadarCfg - CANID: (0x200)')
})

router.get('/RadarCfg/default', (req, res) => {
    sendRadarCfg(0x200, radarCfgDeafult)
    res.json({ code: '200 Ok' })
})

router.post('/RadarCfg', (req, res) => {
    sendRadarCfg(0x200, req.radarCfg)
    res.json({ code: '200 Ok' })
})

router.post('/FilterCfg', (req, res) => {
    sendRadarCfg(0x202, req.radarCfg)
    res.json({ code: '200 Ok' })
})

router.post('/CollDetCfg', (req, res) => {
    sendRadarCfg(0x400, req.radarCfg)
    res.json({ code: '200 Ok' })
})

router.post('/CollDetRegCfg', (req, res) => {
    sendRadarCfg(0x401, req.radarCfg)
    res.json({ code: '200 Ok' })
})

function sendRadarCfg(id, radarCfg) {
    let message = global.canbc.getTemplateById(id)
    for (let key in radarCfg) {
        message.signals.forEach(signal => {
            if (signal.name == key) {
                signal.value = radarCfgDeafult[key]
            }
        })
    }

    global.canbus.send(global.canbc.convert(message))
    return true
}

let radarCfgDeafult = {
    RadarCfg_RCS_Threshold_Valid: 1,
    RadarCfg_RCS_Threshold: 0,

    RadarCfg_StoreInNVM_valid: 1,
    RadarCfg_StoreInNVM: 1,

    RadarCfg_SortIndex_valid: 0,
    RadarCfg_SortIndex: 0,

    RadarCfg_SendExtInfo_valid: 1,
    RadarCfg_SendExtInfo: 1,

    RadarCfg_CtrlRelay_valid: 0,
    RadarCfg_CtrlRelay: 0,

    RadarCfg_SendQuality_valid: 1,
    RadarCfg_SendQuality: 0,

    RadarCfg_MaxDistance_valid: 1,
    RadarCfg_MaxDistance: 250,

    RadarCfg_RadarPower_valid: 0,
    RadarCfg_RadarPower: 0,

    RadarCfg_OutputType_valid: 1,
    RadarCfg_OutputType: 1,

    RadarCfg_SensorID_valid: 0,
    RadarCfg_SensorID: 0,
}


module.exports = router
