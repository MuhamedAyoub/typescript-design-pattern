export abstract class Template {
	public templateMethod(): void {
		console.log('Template Method');
		this.doSomething();
		this.doSomethingElse();
	}

	// Hooks
	protected abstract doSomething(): void;
	protected abstract doSomethingElse(): void;
}
