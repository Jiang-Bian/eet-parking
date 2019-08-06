const canbc = require('./build/Release/canbc.node')

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

		template.signals = JSON.parse(signals)
		return template
	}

	convert(message) {
		let data = canbc.convert(JSON.stringify(message.signals), message.dlc)
		if (!data) return null

		return { id: message.id, data: Buffer.from(JSON.parse(data)) }
	}
}
