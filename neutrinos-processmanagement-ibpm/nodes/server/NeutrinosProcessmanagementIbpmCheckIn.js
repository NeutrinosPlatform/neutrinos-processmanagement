const { BaseComponent } = require('@jatahworx/bhive-toolkits');

module.exports = class NeutrinosProcessmanagementIbpmCheckIn extends BaseComponent {
	constructor(constructorOptions) {
		const _nHtmlName = 'NeutrinosProcessmanagementIbpmCheckIn';
		super(constructorOptions.id, constructorOptions.name, `neutrinos_service_designer_${_nHtmlName}`, _nHtmlName);
		this._nHtmlName = _nHtmlName;
		this.viewType = BaseComponent.viewTypes.SERVER;
		this._nodeConfigs = constructorOptions;
		this.functionName = this.id;
	}

	
	generateSnippet() {
		return  'console.log(bh)';
	}
	};

