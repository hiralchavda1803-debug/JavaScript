// Arrow Function 
// 1. Create a tax calculator with slab logic via functions.

const calculateTax = () =>
{
    var Tax = 0;
    let income = Number(prompt("Enter You Annual Income:"));

    if (income <= 250000)
    {
        Tax = 0;
    }

    else if (income <= 500000) 
    {
        Tax = (income - 250000) * 0.05;
    }

    else if (income <= 1000000) 
    {
        Tax = 12500 + (income - 500000) * 0.20;
    }

    else 
    {
        Tax = 112500 + (income - 1000000) * 0.30;
    }

console.log("Annual Income: ",income);
console.log("Tax: ",Tax);

};

calculateTax();



