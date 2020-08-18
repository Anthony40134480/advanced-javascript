//break
const numbers = [2, 5, 6, 8, 10, 50];
for (let i = 0; i < numbers.length; i++) {
    
    if(numbers[i] > 6){
        break;
    }
    //console.log(numbers[i]);
    
}

//continue
const nums = [1,2,-3,4,5,-6,7,-8,-9,10];
for (let i = 0; i < nums.length; i++) {
    if(nums[i] < 0){
        continue;
    }
    console.log(nums[i]);
}