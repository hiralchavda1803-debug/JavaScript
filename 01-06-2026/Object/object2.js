var user =
{
    fname : "Hiral",
    lname : "Chavda",
    age : 18,
    gender : "Female",
    contect : 1234567890

    
};
console.log(user);
console.log(user.fname);
console.log(user["fname"]);


// basic for ,for-of,for-in
// Object Loop:
for (const key in user) 
{
    console.log(key,user[key]);
    
}

// Computing Object :   []
var key1 = "fname";
var key2 = "e-mail";

var value1 = "Hiral";
var value2 = "hiral@gmail.com";

var object   = 
{
    [key1] : value1,
   [ key2] : value2
}

console.log(object);



// Nested Object :
var user =
{
    fname : "Hiral",
    lname : "Chavda",
    age : 18,
    gender : "Female",
    Address : 
    {
        city : "Rajkot",
        State : "Gujarat",
        Country : "India"
    }
};


console.log(user);
console.log(user.Address);

console.log(user.Address.Country);
console.log(user.Address["Country"]);
console.log(user["Address"]["Country"]);
console.log(user ["Address"].Country);


// Optional Chaining : (?.)
 console.log(user?.address?.city);
console.log(user?.["address"]?.city);
// console.log(user.address["city"]);
// console.log(user["address"]["city"]);
// console.log(user);


// Array in Object : 
var user =
{
    fname : "Hiral",
    lname : "Chavda",
    age : 18,
    gender : "Female",
    Hobbies : ["VollyBall","FootBall"]

};
console.log(user.Hobbies[1]);


//  Object in Array  : 
var arr = 
[
    {id : 1,"fname" : "Hiral"},
    {id : 2,"fname" : "Shruti"},
    {id : 3,"fname" : "Rajal"},
    {id : 3,"fname" : "Ansi"}
]
console.log(arr[0]);