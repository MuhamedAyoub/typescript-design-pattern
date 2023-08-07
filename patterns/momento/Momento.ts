export class Momento {
	private content: String = new String();

	constructor(content: String) {
		this.content = content;
	}

	public getContent(): String {
		return this.content;
	}
}
