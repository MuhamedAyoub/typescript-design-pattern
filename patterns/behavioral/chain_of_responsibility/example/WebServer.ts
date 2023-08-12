import { Handler } from './Handler';
import { HttpRequest } from './HttpRequest';

export class WebServer {
	private handler: Handler;
	constructor(handler: Handler | null) {
		if (!handler) {
			throw new Error('Handler Object should not be null');
		}
		this.handler = handler;
	}

	public handle(request: HttpRequest): void {
		this.handler.handle(request);
	}
}
