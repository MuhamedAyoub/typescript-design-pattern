import { HttpRequest } from './HttpRequest';
export abstract class Handler {
	private next: Handler | null = null;

	constructor(handler: Handler | null) {
		this.next = handler;
	}
	public handle(request: HttpRequest) {
		if (this.doHandle(request)) {
			console.log('UNAUTHORIZED');
			return;
		}
		if (this.next) {
			this.next.handle(request);
		}
	}
	public abstract doHandle(request: HttpRequest): boolean;
}
