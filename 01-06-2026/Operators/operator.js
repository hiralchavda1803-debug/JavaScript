console.log("Operators in JavaScript");
console.log("1.Arithmetic Operators: +, -, *, /, %");
// console.log(10 + 11);
// console.log(10 - 11);
// console.log(10 * 11);
console.log(10 / 11);
console.log(10 % 11);


console.log("2.Assignment Operators: =, +=, -=, *=, /=, %=");
var a = 11;
// a += 10; 
// a -= 10;
// a *= 10;
// a /= 10;
// a %= 10;
console.log(a);


console.log("3.Logical Operators:&&, ||, !");
// console.log(11 > 10 && 11 > 12);
// console.log(11 > 10 || 11 > 12);
console.log(!(11 > 10 && 11 > 12));


console.log("4.Comparison Operators: ==, ===, !=, !==, >, <, >=, <=");
// console.log(11 == "11");
// console.log(11 === "11");
// console.log(11 != "11");
// console.log(11 !== "11");
// console.log(11 > 10);
// console.log(11 < 10);
// console.log(11 >= 10);
console.log(11 <= 10);


console.log("5.conversion with console.log and innerHTML");
console.log(10,typeof 10);
console.log(String(10),typeof String(10));
document.querySelector('h1').innerHTML = typeof String(10);