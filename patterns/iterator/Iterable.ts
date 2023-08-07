import { Iterator } from './Iterator';

class IterAble<Y> {
	private _items = new Array<Y>();

	public get items(): Array<Y> {
		return this.items;
	}
	public set items(value: Array<Y>) {
		this._items = value;
	}
	public pop(): Y {
		return this._items.pop()!;
	}
	public push(value: Y): void {
		this._items.push(value);
	}
	public createIterator(): Iterator<Y> {
		return new ArrayIterator<Y>(this);
	}
}

//? Typescript does not support nested classes, so we have to create a separate class for the iterator
class ArrayIterator<Z> implements Iterator<Z> {
	private _index: number = 0;
	private _items: IterAble<Z>;
	constructor(items: IterAble<Z>) {
		this._items = items;
	}
	next(): void {
		this._index++;
	}
	hasNext(): boolean {
		return this._index < this._items.items.length;
	}
	current(): Z {
		return this._items.items[this._index];
	}
}
