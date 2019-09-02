let router = require('express').Router()

let radarCfgState = {
    RadarState: [],
    VersionID: [],
    FilterState_Header: [],
    FilterState_Cfg: [],
    CollDetRegionState:[],
    CollDetState:[],
    CollDetRelayCtrl:[]
}

module.exports.parseConfigState = function (parsedMsg) {
    switch (parsedMsg.id) {
        case 0x201: // RadarState
            break

        case 0x700: //VersionID
            break

        case 0x203: // FilterState_Header
            break

        case 0x204: // FilterState_Cfg
            break

        case 0x402: // CollDetRegionState
            break

        case 0x408: // CollDetState
            break

        case 0x8: // CollDetRelayCtrl
            break
    }
    return
}

router.get('/RadarState', (req, res) => {
    res.send("global.RadarState")
})

router.get('/VersionID', (req, res) => {
    res.send(global.VersionID)
})

router.get('/FilterState_Header', (req, res) => {
    res.send(global.FilterState_Header)
})

router.get('/FilterState_Cfg', (req, res) => {
    res.send(global.FilterState_Cfg)
})

router.get('/CollDetRegionState', (req, res) => {
    res.send(global.CollDetRegionState)
})

router.get('/CollDetState', (req, res) => {
    res.send(global.CollDetState)
})

router.get('/CollDetRelayCtrl', (req, res) => {
    res.send(global.CollDetRelayCtrl)
})

router.post('/RadarCfg/default', (req, res) => {
    let message = { id: 0x200, dlc: 8, signals: radarCfgDeafult }
    global.canbus.send(global.canbc.convert(message))
    res.json({ code: '200 Ok' })
})

router.post('/RadarCfg', (req, res) => {
    let message = { id: 0x200, dlc: 8, signals: req.radarCfg }
    global.canbus.send(global.canbc.convert(message))
    res.json({ code: '200 Ok' })
})

router.post('/FilterCfg', (req, res) => {
    let message = { id: 0x202, dlc: 8, signals: req.radarCfg }
    global.canbus.send(global.canbc.convert(message))
    res.json({ code: '200 Ok' })
})

router.post('/CollDetCfg', (req, res) => {
    let message = { id: 0x400, dlc: 8, signals: req.radarCfg }
    global.canbus.send(global.canbc.convert(message))
    res.json({ code: '200 Ok' })
})

router.post('/CollDetRegCfg', (req, res) => {
    let message = { id: 0x401, dlc: 8, signals: req.radarCfg }
    global.canbus.send(global.canbc.convert(message))
    res.json({ code: '200 Ok' })
})

let radarCfgDeafult = [
    { name: 'RadarCfg_RCS_Threshold_Valid', value: 1 },
    { name: 'RadarCfg_RCS_Threshold_Valid', value: 1 },
    { name: 'RadarCfg_RCS_Threshold', value: 0 },
    { name: 'RadarCfg_StoreInNVM_valid', value: 1 },
    { name: 'RadarCfg_StoreInNVM', value: 1 },
    { name: 'RadarCfg_SortIndex_valid', value: 0 },
    { name: 'RadarCfg_SortIndex', value: 0 },
    { name: 'RadarCfg_SendExtInfo_valid', value: 1 },
    { name: 'RadarCfg_SendExtInfo', value: 1 },
    { name: 'RadarCfg_CtrlRelay_valid', value: 0 },
    { name: 'RadarCfg_CtrlRelay', value: 0 },
    { name: 'RadarCfg_SendQuality_valid', value: 1 },
    { name: 'RadarCfg_SendQuality', value: 0 },
    { name: 'RadarCfg_MaxDistance_valid', value: 1 },
    { name: 'RadarCfg_MaxDistance', value: 250 },
    { name: 'RadarCfg_RadarPower_valid', value: 0 },
    { name: 'RadarCfg_RadarPower', value: 0 },
    { name: 'RadarCfg_OutputType_valid', value: 1 },
    { name: 'RadarCfg_OutputType', value: 1 },
    { name: 'RadarCfg_SensorID_valid', value: 0 },
    { name: 'RadarCfg_SensorID', value: 0 }
]

module.exports = router
