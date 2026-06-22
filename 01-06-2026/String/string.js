// String : It's a collection of charecters.

// using double quote
var fname = "Hiral";
console.log(fname,typeof fname);


// using single quote
var fname = 'Hiral';
console.log(fname,typeof fname);
var name = 'abcde...';
console.log(name, typeof name);


// using backtik
var fname = `Hiral`;
console.log(fname,typeof fname);
console.log(" ");


var fname = "Hiral";
var age = 18;
console.log("Your name is",fname,".Your age is",age,".");
console.log('Your name is',fname,'. Your age is',age,'.');
console.log(" ");

// String Formating
console.log(`Your name is ${fname}. your age is ${age}.`);
// console.log('Your name is ${fname}. your age is ${age}.');
// console.log("Your name is ${fname}. your age is ${age}.");
console.log(" ");


var str = "This is JavaScript...";
console.log(str);
// length : proprty  
console.log(str.length);
console.log(" ");

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("ew"));
console.log(" ");

console.log(str.split());
console.log(str.split(""));
console.log(str.split(" "));

