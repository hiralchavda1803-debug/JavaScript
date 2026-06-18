function main()
{
    var a = 10;
    return function()
    {
        return a;
    }
}

var output = main();
console.log(output());