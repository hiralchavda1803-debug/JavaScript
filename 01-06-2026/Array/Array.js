// Array : It's a Collection Of Element which is Same Datatype / Different Datatype.

// Empty Array
var arr = [];
var arr = [10,11,12];
var arr = ["Hiral"];
var arr = [10,11,12,"Hiral",true,null];
console.log(arr);
console.log(arr.length);
console.log(arr[1]);
console.log(" ");


var arr = [21,22,23,24];
console.log(arr);
// 1.push
var data =  arr.push(25,26);
console.log(arr);
console.log(data);
console.log(" ");

// 2.pop
var data = arr.pop(26);
console.log(arr);
console.log(data);
console.log(" ");

// 3. unshift
arr.unshift(20);
console.log(arr);
console.log(" ");

// 4.shift
arr.shift();
console.log(arr);
console.log(" ");

// 5.splice
arr.splice(1);
arr.splice(0,2);
console.log(arr);