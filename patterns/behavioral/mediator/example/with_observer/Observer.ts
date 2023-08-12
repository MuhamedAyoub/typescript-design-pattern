export abstract class Observer {
	abstract update<T>(value: T): void;
	abstract update(): void;
}
