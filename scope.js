//let new = 20; = its call global. anything can access this.

// let bonus = 20;

// function sum(num1, num2){
//     let total = num1 + num2 + bonus;
//     console.log(total);
//     console.log(bonus);
//     return total;
// }

// const result = sum(5, 10);
// console.log(result);
// console.log(bonus);

//another style
function number(add1, add2){
    let subTotal = add1 + add2;
    if(subTotal > 10){
        const mood = 'happy'
        console.log(mood);
    }
    
    return subTotal;
}

const submit = number(6, 10);
console.log(submit);