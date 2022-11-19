import {add, sub} from './Calculator';

console.log(add(2,3));
console.log(sub(10,5));

//class
import { Calculator} from './Calculator';

var objCalc = new Calculator();
console.log(objCalc.add(2,3));
console.log(objCalc.sub(10, 5));
