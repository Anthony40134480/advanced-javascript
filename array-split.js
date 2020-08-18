//sclice
const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(3, 7);
console.log(part);
console.log(nums);

//splice
const numbers = [1,2,3,4,5,6,7,8,9,10];
const removePart = numbers.splice(2, 5, 11, 12);
console.log(removePart);
console.log(numbers);

//join
const togethar = numbers.join(' -> ');
console.log(togethar);