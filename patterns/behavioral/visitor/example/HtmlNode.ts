import Visitor from './Visitor';

export interface HtmlNode {
	accept(visitor: Visitor): void;
}
