function second()
{
    console.log("Second Function");
}


function main(callback)
{
    console.log("Callback Function");
    callback();
}
main(second);

function main(scanf)
{
    console.log("Callback Function");
    scanf("Enter Data: ");
}
main(prompt);