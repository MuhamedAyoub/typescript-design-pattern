import { HtmlNode } from './HtmlNode';
import Visitor from './Visitor';

export class HeadingNode implements HtmlNode {
	accept(visitor: Visitor) {
		visitor.apply2(this);
	}
}
