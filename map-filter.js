const number = [10,20,5,7,6];
const newNumber = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    const result = element * element;
    newNumber.push(result);
}
console.log(newNumber);

//array map style
const age = [5, 8, 10, 6, 50];

const result = age.map(function(element){
    const total = element * element;
    return total;
})

console.log(result);

//shortcut function style

const serial = [3, 5, 8, 10, 80];
//element = x;

const total = serial.map(x => x * x);

console.log(total);

// filter & find

const rollNumber = [7, 5, 80, 50, 90];

const highest = rollNumber.filter(x => x > 50);
console.log(highest);

const low = rollNumber.find(x => x < 50);
console.log(low);