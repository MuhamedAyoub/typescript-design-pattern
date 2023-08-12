export interface Iterator<T> {
	next(): void;
	hasNext(): boolean;
	current(): T;
}
