export class HTMLDocument {
	private _content: string;

	constructor() {
		this._content = '';
	}
	public get content(): string {
		return this._content;
	}
	public set content(value: string) {
		this._content = value;
	}
	public makeBold(): void {
		this._content = `<b>${this._content}</b>`;
	}
}
