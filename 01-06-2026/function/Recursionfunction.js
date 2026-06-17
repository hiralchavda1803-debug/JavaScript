// Fibonacci Series : 

var a = 0;
var b = 1;
var n = 10;

function Fibonacci(count,a,b,c=0)
{
    if(count == 0)
        return ;
    console.log(b);
    c = a+b;
    a = b;
    b = c;
    count--;
    Fibonacci(count,a,b);
}
Fibonacci(n,a,b);