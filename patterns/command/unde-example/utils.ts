class List<T> {
	public item: T;
	public next: List<T> | null;
	constructor(item: T) {
		this.item = item;
		this.next = null;
	}
}

export class Stack<T> {
	private top: List<T> | null = null;
	constructor() {
		this.top = null;
	}
	public pop(): T | null {
		if (this.top === null) {
			return null;
		}
		const item = this.top.item;
		this.top = this.top.next;
		return item;
	}
	public push(item: T): void {
		const newItem = new List(item);
		newItem.next = this.top;
		this.top = newItem;
	}
	public peek(): T | null {
		return this.top?.item ?? null;
	}
	public isEmpty(): boolean {
		return this.top === null;
	}
}
