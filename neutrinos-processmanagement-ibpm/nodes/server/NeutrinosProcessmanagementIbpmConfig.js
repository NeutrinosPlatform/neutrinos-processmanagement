const { BaseComponent } = require('@jatahworx/bhive-toolkits');

module.exports = class NeutrinosProcessmanagementIbpmConfig extends BaseComponent {
	constructor(constructorOptions) {
		super(constructorOptions.id, constructorOptions.name, 'neutrinos_service_designer_NeutrinosProcessmanagementIbpmConfig', 'NeutrinosProcessmanagementIbpmConfig');
        this.functionName = constructorOptions.id;
		this.viewType = BaseComponent.viewTypes.SERVER;
	}
};
