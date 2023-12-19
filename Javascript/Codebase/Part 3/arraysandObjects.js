/*
Arrays and objects
Arrays:
- Learning Objectives: 
-- To understand what an array is
-- To explore how arrays can be used.
-- To make use of array methods.

Objects:
- Learning Objectives: 
-- Explore the concept of an Object
-- To access data from within an object

*/



// is an array
// In JS we start counting from zero(array is zero-index). Start counting from zero
let people = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam"]
document.write(`People: ${people}`)

// Access items in an array using the index value
document.write(`</br> People: ${people[4]}`);
document.write(`</br> People: ${people[1]}`);
document.write(`</br> People: ${people[2]}`);
document.write(`</br> People: ${people[3]}`);
document.write(`</br> People: ${people[7]}`);
document.write(`</br> People: ${people[-1]}`);

// Array property : length
// check the total number of items in an array using the dot notation followed by the length
document.write(`</br> The number of  People: ${people.length}`);


// Array Methods
// Add an item to an array using the push method
people.push("Luke");
document.write(`People: ${people}`);
document.write(`</br> The number of  People: ${people.length}`);
// remove the last item in an array using the pop method
people.pop();
document.write(`People: ${people}`);
document.write(`</br> The number of  People: ${people.length}`);
// update an item in an array using their index value
people.push("Someone");
document.write(`People: ${people}`);
people[7]="Jake";
document.write(`People: ${people}`);


// investigate 
people.splice()
people.shift()
people.unshift()

// You can create an empty array to add items later
let emptyArray = [];
 
emptyArray.push("A")
document.write(`</br> Items in :</br> ${emptyArray}`);


/*
Objects 
Explore the concept of an Object
To access data from within an object

*/
// let people = ["Yousef","Alfredo", "Kayi", "Zineb", "Nirupama", "Melvin", "Eduard", "Vairalakshmi", "Yusuf"]

// Syntax: peopleObject {"object":Value}
// An object is a group of values; unlike arrays, we can do something better than them:
// Rather than making an array["John Doe", "Billy"] and calling myArray[0], we can just call john.fullname and
// billy.fullname.

// Syntax: peopleObject {"object":Value}
let peopleObject = {
    p1:"Zeinab",
    p2:"Akansha",
    p3:"Nirmala",
    p4:"Mihir",
    p5:"Fisayo",
    p6:"Marian",
    p7:"Mihir"
}
// You can access object properties in two ways:
// objectName.propertyName or objectName["propertyName"]
document.write(`</br> People's Object: ${peopleObject.p1}`);

document.write(`</br>`);
 
// objectName.propertyName
document.write(`</br> People Object:</br> ${peopleObject.p1}`);
//objectName["propertyName"]
document.write(`</br> People Object:</br> ${peopleObject['p2']}`);

 //Nested objects
 let user = {
    firstname: "James",
    lastName:"bond",
    hobby:{
        coding:"JS",
        tvShow:"Game Of Thrones",
 
    }
}
document.write(`</br> People Object:</br> ${user.hobby.tvShow}`);
document.write(`</br> People Object:</br> ${user['hobby']['coding']}`);
 



// myobj = peopleObject
// document.write(myobj)
// console.log(peopleObject)
// Access object data using the bracket notation

// Access object data using the dot notation




// Update an object data using the bracket notation
document.write(`</br>`);
document.write(`</br>`);
peopleObject.p1 = "Zeinab Abu"
peopleObject['p2'] = "Akansha Dhote"
 
document.write(`</br> People Object:</br> ${peopleObject.p1}`);
document.write(`</br> People Object:</br> ${peopleObject.p2}`);
 
user.hobby.coding = "JavaScript"
document.write(`</br> People Object:</br> ${user['hobby']['coding']}`);


// Add new property to an object data using the bracket notation
document.write(`</br>`);
peopleObject.p8 = ["A", "B","C"];
document.write(`</br> People Object:</br> ${peopleObject.p8}`);
document.write(`</br> People Object:</br> ${peopleObject.p8[1]}</br>`);




//This is for when JSON object is delivered with local storage

let animalDomestic = "Cat";
 
switch(animalDomestic){
    case "Cat":
        document.write("This is a Cat")
        break; // exit if the case is a match
    case "Dog":
        document.write("This is a Dog")
        break; // exit if the case is a match
    case "Bird":
        document.write(`This is a Bird`)
        break; // exit if the case is a match
    case "Rabbit":
        document.write("This is a Rabbit")
        break; // exit if the case is a match
    case "Fish":
        document.write("This is a Fish")
        break; // exit if the case is a match
    default:
        document.write(`Not a domestic Animal`)
}