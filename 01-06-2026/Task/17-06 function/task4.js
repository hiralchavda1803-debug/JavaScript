//IIFE Function : 
// 1. Write a function to validate a 6-digit OTP.4

(function()
{
    var OTP = Math.floor(Math.random()* 100000)+ 100000;
    console.log(OTP);

    var isOTP = Number (prompt("Enter the OTP : "));

    if (OTP == isOTP)
    {
        alert("OTP is Correct!");
    }
    else
    {
        alert("OTP is Incorrect!");
    }
}
)();
