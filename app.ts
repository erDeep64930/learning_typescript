
function calculate2  (num1:number,num2:number){
    return num1 +num2
}
console.log(calculate2(89,5));
// to see the result typescript type tsc app.ts

function getTotal(numbers){
    return numbers.reduce(function(acc,item){
        return acc + item;
    },0)
}
console.log(getTotal([3,5,9]));