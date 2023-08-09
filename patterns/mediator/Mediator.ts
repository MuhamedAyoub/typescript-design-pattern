import { Colleague } from './Colleague';

export abstract class Mediator {
	abstract changed(colleague: Colleague): void;
}
