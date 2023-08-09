export interface Observer {
	update<T>(value: T): void;
	update(): void;
}
