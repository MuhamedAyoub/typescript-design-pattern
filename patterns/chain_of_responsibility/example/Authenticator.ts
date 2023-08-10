import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';

export class Authenticator extends Handler {
	constructor(handler: Handler | null) {
		super(handler);
	}

	override doHandle(request: HttpRequest): boolean {
		const isValid = request.username === 'admin' && request.password === '1234';
		console.log('Authentication');
		return !isValid;
	}
}
