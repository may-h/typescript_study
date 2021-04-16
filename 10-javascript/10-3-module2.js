//import run, {print} from './10-3-module1.js';
import * as calculator from './10-3-module1.js'; 
console.log(calculator.add(1,2));
calculator.print()


console.log(run(1,3)); //모듈화 되면 다른파일에 접근이 불가하지만 사용하고 싶으면 export, import를 해야한다. 

// function add (a, b) {
//     return a - b;
// }