var num =  parseInt(Math.random());
// console.log(Math.random());


// console.log(parseInt(Math.random()*100));
// console.log(Math.random()*100);

for(;;)
{
    let value = Number (prompt("Enter the Number:"));

    if(num > value)
    {
        alert("Guess Higher Number");
    }

    else if(num == value)
    {
        alert("Correct Number");
        break;
    }

    else
    {
        alert("Guess Lower Number");
    }
}