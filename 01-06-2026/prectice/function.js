// (a) Without Argument & Without Return Type
// Q1. Write a named function to print "Hello World".
console.log("Q1...")
function print()
{
    console.log("Hello World");
}
print();
console.log(" ");


//  Q2. Write a named function to display numbers 1 to 5.
console.log("Q2...")
function printdata()
{
    for (let i = 1; i <= 5; i++) 
    {
        console.log(i);
        
    }

}
printdata();
console.log(" ");



// (b) With Argument & Without Return Type
// Q3. Write a named function that prints a given name.
console.log("Q3...")
function printName(Name)
{
    console.log(Name);
}
printName("Hiral");
console.log(" ");


// Q4. Write a named function that prints the multiplication table of a given number.
console.log("Q4...")
function PrintTable(num)
{
    for (let i = 0; i <= 10; i++) 
    {
        console.log(`${num} * ${i} = ${num*i}`);
        
    }
}
PrintTable(7);
console.log();

function printTable(table)
{
    for (let i = 0; i <= 10; i++) 
    {
        console.log(table,"*",i,"=",table*i);
    }
}
printTable(3);
console.log(" ");



// Without Argument & With Return Type
// Q5. Write a named function that returns today's date.
console.log("Q5...")
function DateToday() 
{
    return Date();
}
console.log(DateToday());
console.log(" ");


// Q6. Write a named function that returns a random number between 1 and 100.
console.log("Q6...")
function RandomNumber() 
{
    return Math.floor(Math.random()*100) + 1;
}
console.log(RandomNumber());
console.log(" ");



// With Argument & With Return Type
// Q7. Write a named function that returns the sum of two numbers.
console.log("Q7...")
function sum(n1,n2)
{
    return n1 + n2;
}
console.log( "Sum is: ", sum(10,12));
console.log(" ");


//  Q8. Write a named function that returns the square of a given number.
console.log("Q8...")
function square(num) 
{
    return num*num;
}
console.log(square(7));
console.log(" ");



// Q9. Write a named function that returns the factorial of a number.
console.log("Q9...")
function factorial(num) 
{
    let fact = 1;
    for (let i = 1; i <= num; i++) 
    {
      fact *= i;
    }
    return fact;
}
console.log(factorial(5));
console.log(" ");


// Q10. Write a named function that checks whether a string is a palindrome and returns true or false.
console.log("Q10...")
function pelindrome(str) 
{
    var revstr = "";
    for (let i = str.length - 1; i >= 0; i--) 
    {
        revstr += str[i];
    }
    if(revstr == str) 
        return true
    else    
        return false
}
console.log(pelindrome("madam"));