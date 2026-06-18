function main(){
    console.log("Nested Function");

    function innerFunction()
    {
        console.log("Inner Function");

        function innerFunction2()
        {
            console.log("inner Function 2");
        }
        innerFunction2();
    }
    innerFunction();

}

main();