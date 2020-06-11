import { CredentialsObject } from 'nexmo';
import * as Nexmo from 'nexmo';
import log from "../../Logger";


export const NexmoService = (function () {

	let nexmInstMap: any = {};

	function newNexmoInstance(nexmoOpts: CredentialsObject): any {
		if (!nexmoOpts) {
			log.error('INVALID_ARGS: Could not instantiate nexmo. Please pass "nexmoOpts" object as argument.');
		}
		return new (<any>Nexmo)(nexmoOpts);
	}

	function instantiateNexmoIfNotPresent(config: any, operation: string) {
		if (!nexmInstMap[config.id]) {
			log.debug('Nexmo instance not available. Creating a new instance...');
			if (!config) {
				log.error('INVALID_ARGS: Could not create nexmo instance. Please pass the "configId".')
				return;
			}
			nexmInstMap[config.id] = newNexmoInstance({
				apiKey: config.apiKey,
				apiSecret: config.apiSecret,
				...(config.applicationId && { applicationId: config.applicationId }),
				...(config.privateKey && config.privateKey.value && { privateKey: config.privateKey.value })
			});
		}
		log.debug(`Nexmo instance available. Using it to ${operation}`);
	}

	function nexmoRequestCallback(resolve: { (value?: any): void; (arg0: any[]): any; }, reject: { (reason?: any): void; (arg0: any): any; }, ...args: any[]) {
		if (args[0]) {
			return reject(args[0]);
		}
		return resolve(...args.slice(1, args.length));
	}


	function createCall(createCallOptions: CreateCallOpts, config?: any): Promise<any> {
		return new Promise((res, rej) => {
			if (!createCallOptions.from || !createCallOptions.to) {
				log.error('INVALID_ARGS: Could not create call. "from" and "to" objects are mandatory');
				return;
			}
			instantiateNexmoIfNotPresent(config, 'create call');
			nexmInstMap[config.id].calls.create(createCallOptions, (...args: any) => nexmoRequestCallback(res, rej, ...args));
		});
	}

	function getCallRecording(filIdOrUrl: string, config?: any): Promise<any> {
		return new Promise((resolve, reject) => {
			if (!filIdOrUrl) {
				log.error('INVALID_ARGS: Could not get the recording. fileId or url is mandatory');
				return;
			}
			instantiateNexmoIfNotPresent(config, 'get recoring');
			nexmInstMap[config.id].files.get(filIdOrUrl, (...args: any) => nexmoRequestCallback(resolve, reject, ...args))

		});
	}

	return {
		createCall: createCall,
		getCallRecording: getCallRecording
	};

})();


interface CreateCallOpts {
	to: any[];
	from: any;
	ncco?: any[];
}