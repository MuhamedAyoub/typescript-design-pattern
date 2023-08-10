import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';
export class Compressor extends Handler {
	constructor(handler: Handler | null) {
		super(handler);
	}

	public doHandle(request: HttpRequest): boolean {
		console.log('Compress');
		return false;
	}
}
