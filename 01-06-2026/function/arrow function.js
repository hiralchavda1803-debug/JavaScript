// i. without argument and without return type
var greeting  = () => 
{
    console.log("Welcome to JavaScript...");
}
greeting();
console.log(" ");


// ii. with argument and without return type
var addition = (n1,n2) =>
{
    console.log("Addition is : ",n1+n2);
}
addition(27,18);
console.log(" ");


// iii. without argument and with return type
const PI = () =>
{
    return 3.14;
}
console.log(PI());

// const PI = () => 3.14
// console.log(PI());
console.log(" ");


// iv. with argument and with return type 
let result = (marks) =>
{
    if (marks >= 33)
    {
        return "pass";
    }
    else
    {
        return "Fail";
    }
}
console.log(result(70));
console.log(result(30));
console.log(" ");


var printNumber = n1 => console.log(n1);
printNumber(27);