

// A Variable is a container that hold value (of any datatype)



// Variable: is a container that hold value (of any datatype)
// Var  = old syntax  - Don't use
// any variable (var/let/const/) declared outside of a code has a global scope

var oldschool = "Old method of declaring a variables"; 
var num1 =  10;

var myName = "Credzie";
var myAge = 33;

console.log(oldschool);
console.log(num1);
console.log(myName);
console.log(myAge);

// let method for declaring variables that we may want redeclare/reassign the value

let changeAble = "A value stored in a variables that can be redeclared"
console.log(changeAble); 
changeAble = "A new value has been passed/redeclared with the changeAble variable"
console.log(changeAble);

let myYear = "2023";
myYear = 1990;
myYear = 1995;

console.log(myYear);


// redeclare the variable firstPerson

let firstPerson = "sam";
firstPerson = "john";
console.log(firstPerson);

 // declare secondPerson variable for the first time
 let secondPerson = "Paul";
// let secondPerson = "John";  // We can't redecarle a let variable
//Limititains: can not re declare a variable as shown below
// let someVar = "something";
// let someVar = "something else";

// redecare/reassign the value associated with secondPerson variable 



// use const to declare variables with value(s) that will never change

const myConstant = "A value that can not be redeclared"
const daysInWeek = 7;


// variable declared without a value will appear as undefined
let someVar;
console.log(someVar)

// We cannot overwrite the values(s) of const variables(s) will give syntax error
// const daysInWeek = 5;




// In browser javaScript
// document.write
document.write("Working with the document.write method in JS </br>Javascript Datatypes");

// 128 64 32 16 8 4 2 1 
// 0   0  1  0 0 0 0 0 (Binary Code)

// JavaScript Datatypes: 
// Primitive data types (holds simple and single data):
//  Number: 32 bit number ( from -2,000,000,000 to +2,000,000,000 )
//  Long: 64 bit number( from -9,000,000,000,000,000 to +9,000,000,000,000,000)
//  Boolean: 1 bit 0 or 1
//  float: 32 floating point number
//  Undefined, 
//  Null, 
//  Symbol, 
//  String,
// 


// numbers/integer
let num2 = 10 + 5;

// float/decimal
let myFloat = 11.2568;

// long
let myLongNum = 234567809876;

// Boolean--// True or False
let bool1 = true;
let bool2 = false;

document.write("</br> numbers/integer ", num2);
document.write("</br> float/decimal ", myFloat);
document.write("</br> long ", myLongNum);
document.write("</br> Boolean Value 1 ", bool1);
document.write("</br> Boolean Value 2 ", bool2);

//undefined
// document.write("</b> undefined ", undefined)

let fName = "James";
let lName = "Bond";

// use the plus operator to concatenate(to join)

let fullName = fName + ""+ lName;
document.write("</br> Your full name is", fullName,"</br>");


let breakfast = "toast";
let lunch = "chicken salad";
let dinner = "Mash";
let mealCost = 12;

// use template "${}" literals to format output using the (``) as the quoatation marks instead of the standard quatation marks

document.write(`Today, ${fullName} had ${breakfast} for breakfast, and will have ${lunch} for lunch, but no dinner. </br> His total is ${mealCost}`);


let $ = "I am a dollar"
document.write(`</br>${$}`)

document.write("</br> Check the data types of variables ");
document.write(typeof num2,"</br>" )
document.write(typeof myFloat,"</br>")
document.write(typeof myLongNum,"< br>")
document.write(typeof bool1, "</br>" )
document.write(typeof fullName, "</br>")


// JavaScript Using Template Literals


// check the data type of the variable
// document.write("<br/> check the data type of the variable <br/> " )
// document.write(typeof cashAtBank,"<br/>" )
let cashAtBank = 12000;
document.write(`</br> $${cashAtBank}`);
document.write(`</br> £${cashAtBank}`);


// Non-Primitive data types: Javascript (object) datatype(holds complex data)

// An object: key value pair
// objectName = {key:value, Key:value};
// objectName  = {key:value, key:value , key:value, key:value}
// const userDetails = {firstname:"John", lastname:"Smith", Age:"32"};
const userDetails = {firstname:"John", lastname:"Smith", age:22};
document.write(`</br> ${userDetails.firstname}`);
document.write(`</br> ${userDetails.lastname}`);
 
 
// an array
 const people = ["Jane", "Anna", "lucy", "Credzie", "James"]
document.write(`</br> ${people}`);
console.log(`${people}`)

 
// A date(object)
console.log('US Date format');
const curDate = new Date("2023-12-12")
document.write(`</br> ${curDate}`);
console.log(`${curDate}`);
 
console.log('UK Date format');
const curDate1 = new Date("11-12-2023")
document.write(`</br> ${curDate1}`);
console.log(`${curDate1}`);



// In-built JavaScript library  
document.write("<br/>  <br/>");
document.write("<br/> Math <br/>");

// Use the dot notation on methods, libraries and functions
 // Returns a pseudorandom number between 0 and 1.
// document.write(Math.random());
document.write(Math.random());

document.write("<br/>  <br/>");


// Generate random number between 1 and 10 (number between 0 and 1  x 10)

document.write(Math.random() * 10);


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round it down using the floor method
document.write("<br/>  <br/>");
let roundNum = Math.random() * 10;
document.write(`<br/> Random Value (float) : ${roundNum}`);


// document.write("<br/>Rounded down using floor method : ",Math.floor(Math.random() * 10))
document.write(`<br/> Floor Random Value : ${Math.floor(roundNum)}`);



// Generate random number between 1 and 10 (number between 0 and 1  x 10) and rounds it using the round method
// document.write("<br/>Rounded using round method : ",Math.round(Math.random() * 10))
document.write(`<br/> Round Random Value : ${Math.round(roundNum)}`);


// Generate random number between 1 and 10 (number between 0 and 1  x 10) and round up using the ceil method
// document.write("<br/>Rounded using round method : ",Math.ceil(Math.random() * 10))
document.write(`<br/> Round Up Random Value : ${Math.ceil(roundNum)}`);










