import { Publisher } from '../Publisher';
import { Subject } from '../Subject';
import { Chart } from './Chart';
import { Cubic } from './Cubic';
import { SpreadSheet } from './SpreadSheet';

const pub = new Publisher();
// Support Push style
const chart1 = new Chart();
const chart2 = new Chart();
const spreadSheet1 = new SpreadSheet();
const spreadSheet2 = new SpreadSheet();
const spreadSheet3 = new SpreadSheet();
// Support Pull style
const cube = new Cubic(pub);
pub.addObserver(chart1);
pub.addObserver(chart2);
pub.addObserver(spreadSheet1);
pub.addObserver(spreadSheet2);
pub.addObserver(spreadSheet3);
pub.addObserver(cube);
pub.value = 5;

console.log('---');
