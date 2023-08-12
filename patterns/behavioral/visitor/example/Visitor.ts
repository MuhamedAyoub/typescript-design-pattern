import { AnchorNode } from './AnchorNode';
import { HeadingNode } from './HeadingNode';
interface Visitor {
	apply(anchorNode: AnchorNode): void;
	apply2: (headingNode: HeadingNode) => void;
}

export default Visitor;
