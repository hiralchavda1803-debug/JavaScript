// var num =  parseInt(Math.random());
// console.log(Math.random());


// console.log(parseInt(Math.random()*100));
// console.log(Math.random()*100);


var number = Math.floor(Math.random()*100);
var count = 0;
let winner = false;

for (;;)
{
    while(count <= 10)
    {
        let num = Number(prompt("Enter the Number Between 1 too 100."));
        count++;

        if (number > num)
        {
            alert("Too High");
        }
        else if(number == num)
        {
            alert("Congralutions! You winner.!");
            alert(count);
            winner = true;
            break;
        }
        else
        {
            alert("Too Low");
        }
    }
    let play = prompt("What You play Again : Yes / No ");
    if (play == "Yes")
    {
        console.log("Start Game...");
    }
    else
    {
        console.log("Game is Over...");
        break;
    }

}
if(!Win)
{
    alert("Game is Over...");
}