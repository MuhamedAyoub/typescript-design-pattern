import { Momento } from './Momento';

class Originator {
	private content: String = new String();

	public createState(): Momento {
		return new Momento(this.content);
	}

	public restore(state: Momento): void {
		this.content = state.getContent();
	}

	public getContent(): String {
		return this.content;
	}

	public setContent(content: String): void {
		this.content = content;
	}
}
