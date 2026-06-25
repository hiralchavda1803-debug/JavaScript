// Object :- It's Collection of Properties and Methods.
// How to Create an Object : 

// 1.Using Object Literal:
var user = {};
console.log(user,typeof user);


// 2. Using Object Class:
var user = new Object();
console.log(user,typeof user);


// 3. Using Object.create() Method :
var user = Object.create({});
console.log(user,typeof user);


// 4. Using Object.assign() Method : 
var user = Object.assign({});
console.log(user,typeof user);


// 5. Using Function ()
var user = 
{
    fname : 'Hiral',
    lname : 'chavda',
    age : 18,
    gender : 'female',
    bioData : function()
    {
        // method
        console.log(`My name is ${this.fname} ${this.lname} ${this.age}`);
        
    }
   
}
user.bioData();
console.log(" ");



// 1. How to Access Object
console.log(user);


// 2. How to Access Object Property Value 
// i. using Dot Notation .
console.log(user.fname);

// ii.using Bracket Notation []
console.log(user[`lname`]);


// 3. How to Modify Object Property Value
// i. using Dot Notation
user.fname = 'kaira';
// ii.using Bracket Notation  []
user['gender'] = "female";

console.log(user);


// 4. How to Add Property 
// i. using Dot Notation
user.contect = 1234567890;

// ii.using Bracket Notation  []
user["position"] = `CEO`;
console.log(user);


// 5. How to remove Property 
// i. using Dot Notation
delete user.age;


// ii.using Bracket Notation  []
delete user['lname'];
console.log(user);

// 6. How to User Method : 
user.bioData();