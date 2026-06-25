let numbers = [1, 3, 5, 7, 8, 9];
console.log(numbers);

function checkEven(arr) 
{
    return arr.some(function(num) 
    {
        return num % 2 === 0;
    });
}

console.log(checkEven(numbers));
