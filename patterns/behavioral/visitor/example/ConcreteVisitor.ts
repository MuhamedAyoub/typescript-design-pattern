import { AnchorNode } from './AnchorNode';
import { HeadingNode } from './HeadingNode';
import Visitor from './Visitor';
export class HighlighVisitor implements Visitor {
	apply2(headingNode: HeadingNode) {
		console.log('highlight-heading-node');
	}
	apply(anchorNode: AnchorNode) {
		console.log('highlight-anchor-node');
	}
}
