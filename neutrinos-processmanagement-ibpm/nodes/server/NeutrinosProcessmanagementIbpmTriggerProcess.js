const { BaseComponent } = require('@jatahworx/bhive-toolkits');

module.exports = class NeutrinosProcessmanagementIbpmTriggerProcess extends BaseComponent {
	constructor(constructorOptions) {
		const _nHtmlName = 'NeutrinosProcessmanagementIbpmTriggerProcess';
		super(constructorOptions.id, constructorOptions.name, `neutrinos_service_designer_${_nHtmlName}`, _nHtmlName);
		this._nHtmlName = _nHtmlName;
		this.viewType = BaseComponent.viewTypes.SERVER;
		this._nodeConfigs = constructorOptions;
		
	}

	
	generateSnippet() {
		
		return 'console.log(bh)';
	}

	};

