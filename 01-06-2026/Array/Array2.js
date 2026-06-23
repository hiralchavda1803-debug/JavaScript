var arr = [10,20,30,40,50,80,90];
console.log(arr);
Element


// length : Property
console.log(arr.length);
console.log(" ");


// indexof
console.log(arr.indexOf(30));
// console.log(arr.indexOf(60));
console.log(" ");


//lastindexof
console.log(arr.lastIndexOf(90));
console.log(" ");


// include :- true / flase
console.log(arr.includes(10));
console.log(arr.includes(100));
console.log(" ");


// foreach
console.log("ForEach:");
var array1 = arr.forEach((Element)=>
{
    return Element;

});
console.log(array1);
console.log(" ");


// map
console.log("Map:");
var array2 = arr.map((Element)=>
{
    return Element < 50;
})
console.log(array2);
console.log(" ");


// filter
console.log("Filter:");
var array3 = arr.filter((Element)=>
{
    return Element < 50;
})
console.log(array3);
console.log(" ");


// every : true / flase
console.log("Every:");
var out1 = arr.every((Element)=>
{
    console.log(Element);
    return Element < 50;
    
})
console.log(out1);
console.log(" ");



// some : true / flase
console.log("Some:");
var out2 = arr.some((Element)=>
{
    console.log(Element);
    return Element > 50;   
})
console.log(out2);
console.log(" ");



// Sort
var arr = [27,18,2,3,7,8,45];
console.log(arr);

arr.sort((a,b)=>
{
    return a - b;
})

arr.sort((a,b)=>
{
    return b - a;
});

console.log(arr);
