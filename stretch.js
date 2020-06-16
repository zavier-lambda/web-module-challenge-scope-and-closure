function createBase(num) {
    let global = num;
    return function (funcNum) {
        funcNum = funcNum + global;
        return funcNum; 
    }
}
var addSix = createBase(6);
console.log(addSix(10));
console.log(addSix(21));
