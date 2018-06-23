import {
    square,
    diag,
    callInnerVar
} from './math.js';


addDiv('from outer script : ' + square(12));
addDiv('from outer script : ' + diag(5, 11));
console.log(square(12)); // 121
console.log(diag(5, 10)); // 5

try {
    console.log(innerModule); //i am private so i will throw error
} catch (e) {
    console.log(e);
}

callInnerVar();