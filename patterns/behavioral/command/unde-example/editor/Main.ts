import { BoldCommand } from './BoldCommand';
import { History } from './History';
import { HTMLDocument } from './HtmlDocument';
import { UndoCommand } from './UndoCommand';

const document = new HTMLDocument();
const history = new History();
document.content = 'Hello - World';

const boldCommand = new BoldCommand(history, document);
boldCommand.execute();
console.log(document.content);
const undoCommand = new UndoCommand(history);
undoCommand.execute();
console.log(document.content);
