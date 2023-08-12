import { HtmlNode } from './HtmlNode';
import Visitor from './Visitor';

export class AnchorNode implements HtmlNode {
	accept(visitor: Visitor) {
		visitor.apply(this);
	}
}
