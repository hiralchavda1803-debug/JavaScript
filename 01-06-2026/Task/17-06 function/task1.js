// Recursion Function 
// 1. Write a recursive function to generate Armstrong Number series up to n terms.

function Series(n) {


    let orignalNumber = n;
    let num = String(n);
    let sum = 0;

    function Armstrong(number) 
    {
        if (number == 0) 
        {
            return sum;
        }
        let digit = 1;
        var temp = n % 10;


        for (let i = 0; i < num.length; i++) 
        {
            digit *= temp;
        }
        sum += digit;
        return Armstrong(Math.floor(number / 10));
    }
    Armstrong(n);
    return sum == orignalNumber;

}

for (let i = 0; i < 1000; i++) 
{
    if (Series(i)) 
    {
        console.log(i);
    }

}


