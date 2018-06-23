import { square, diag } from './math.js';


addDiv('from outer script : ' + square(12));
addDiv('from outer script : ' + diag(5, 11));
console.log(square(12)); // 121
console.log(diag(5, 10)); // 5