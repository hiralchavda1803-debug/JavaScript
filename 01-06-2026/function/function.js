// Type Of Function 
// 1. without argument and without return type 
// 2. with argument and without return type 
// 3. without argument and with return type 
// 4. with argument and with return type 


// 1. without argument and without return type 
function greeting ()
{
    console.log("WelCome to the JavaScript...");
    alert("WelCome");
    document.write("Hello");
}
greeting();

function changeText()
{
    document.querySelector('h1').innerHTML = "New Text";
}
changeText();


// 2. with argument and without return type 
function add(n1,n2)
{
    console.log("Addition is : ", n1 + n2);
}
add(12,13);
console.log(" ");


// 3. without argument and with return type 
function PI()
{
    return 3.14;
}
console.log(PI());



// 4. with argument and with return type 
function result(marks)
{
    if(marks >= 35)
    {
        return "Pass";
    }
    else
    {
        return "Fail";
    }
}
console.log(result(5));



function arithmatic(n1,n2,op)
{
    switch(op)
    {
        case "+":
        return n1 + n2;

        case "-":
        return n1 - n2;
        
        default:
        return "Please Enter Valid Choice!!";
    }
}

alert(arithmatic(10,11,"+"));
alert(arithmatic(12,11,"-"));