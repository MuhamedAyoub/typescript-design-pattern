import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';

export class Logger extends Handler {
	constructor(handler: Handler | null) {
		super(handler);
	}
	doHandle(request: HttpRequest) {
		console.log('Logger Called ..');
		return false;
	}
}
