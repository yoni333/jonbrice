console.log('math module here')
var innerModule = "i am private";
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export function callInnerVar(){
    console.log(innerModule + '-- but with export can uncover me just like regular getter');;
    

}