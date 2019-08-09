const canbc = require('./build/Release/canbc.node')
//const canbc = require('./build/Debug/canbc.node')

module.exports.CANBC = class {
	constructor(option) {
		this.templates = {}
		if (!option) return

		this.canbus = option.canbus
		this.init(option.templates)
	}

	init(templates) {
		templates.forEach(template => {
			this.templates[template.id] = template
		})
	}

	getTemplateById(canid) {
		return this.templates[canid]
	}

	parse(message) {
		let template = this.getTemplateById(message.id)
		if (!template) return null


		let signals = canbc.parse(JSON.stringify(template.signals), JSON.stringify([...message.data]))
		if (!signals) return null

		let canbcMsg = {}
		canbcMsg.id = template.id
		canbcMsg.name = template.name
		canbcMsg.comment = template.comment
		canbcMsg.signals = JSON.parse(signals)

		return canbcMsg
	}

	convert(message) {
		let data = canbc.convert(JSON.stringify(message.signals), message.dlc)
		if (!data) return null

		return { id: message.id, data: Buffer.from(JSON.parse(data)) }
	}
}
