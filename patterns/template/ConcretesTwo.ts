import { Template } from './Template';

class ConcretesTwo extends Template {
	override doSomething(): void {
		console.log('Concrete Two doSomething');
	}

	override doSomethingElse(): void {
		console.log('Concrete Two doSomethingElse');
	}
}
