import { Template } from './Template';

class ConcretesOne extends Template {
	override doSomething(): void {
		console.log('Concrete One doSomething');
	}

	override doSomethingElse(): void {
		console.log('Concrete One doSomethingElse');
	}
}
