// 3. every() Method:
// Question: You have an array of numbers:
let numbers = [2, 4, 6, 8, 10];
console.log(numbers);

function checkEven(arr) 
{
    return arr.every(function(num) 
    {
        return num % 2 === 0;
    });
}

console.log(checkEven(numbers));