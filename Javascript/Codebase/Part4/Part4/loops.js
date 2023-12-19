
/*
To explore loops and integrate them into your code
For Loop
While Loop
ForEach Loop
Do While Loop
*/

//for loop is use to iterate over an object for a specific number of times 



// ++ is the increment operator , where we place the increment operator impacts when the increment takes place
let num1 = 10;
 
document.write(` The value of num1 before the increment ${num1}</br>`);
 
let num2 = ++num1;
let num3 = num2++;
 
document.write(` The value of num2 after the increment ${num2}</br>`);
document.write(` The value of num3 after the increment ${num3}</br>`);
 


// for Loop
// i = 0
// i = 1 ..2 ..3...4..5...

for(let i = 20; i < 22; i++){
    document.write(`</br> ${i}`)
};

// declare empty array

let multipleOfTwo = []
    document.write(`</br> Empty Array ${multipleOfTwo}`)


for(let aNumber = 0; aNumber < 25; aNumber++){
    // document.write(`</br> ${i}`)
    if(aNumber % 2 === 0){
multipleOfTwo.push(aNumber)
    }
};
    document.write(`</br> Populated Array ${multipleOfTwo}`);


    let people = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam"];
 
for (let aPerson in people){
    document.write(`</br>${people[aPerson]} `)
 
};
aName = prompt("Enter a name to search ")
 
for (let findName in people){
    // document.write(`</br>${people[aPerson]} `)
    if(people[findName] === "Fatinah")
    // if(people[findName] === aName)
    {
        break;
    }
    document.write(`</br>The list is ends on ${people[findName]} name`)
 
};


// Task 1: Create an array of your favourite films / TV shows, up to 5 items.
//Use an array method to add 2 more items to your array.
//Use a loop to cycle through the array and log each item to the console/ browser.
 let favWatch = ["Marvel","Sci-fi", "Action", "Comedy", "Anime"]

 favWatch.push("Cartoon","Sports")

 document.write(`</br> favourite films / TV shows ${favWatch} `);


 for (let items in favWatch){
    document.write(`</br>List of Favourite watch ${favWatch[items]}`)
};

// Task 2: Generate 10 random numbers between 1-100 and log them to the console/browser.

let randomNum = [];

for (let i = 0; i < 100; i++){
    let randomNumber = Math.floor(Math.random()*100) + 1;
    randomNum.push(randomNumber);
}
document.write(`</br> RandomNumber generated ${randomNum}`);

//While iterates/repeats until a condition is met
let number = 0;
 
while(number < 5){
    document.write(`</br>Number ${number}`)
    number++
};

let userData =   "test"//prompt("Enter user data:")
let systemData = "password"
 
while(userData === systemData){
    document.write(`</br>Successfully logged In`)
    systemData++};

    let total = 0;
 
// ask for user input
let userNum = parseInt(prompt("Enter a number: "))
 
while(userNum >= 0){
    // add only positve numbers
    total = total + userNum //total += userNum
 
        // keep asking for user input if the number is positive
     userNum = parseInt(prompt("Enter a number: "))
};

document.write(`</br> The total is ${total}`);


// Task 3: Create a loop that counts backwards from 20-0.

for(let a = 20; a >= 0; a--){
    document.write(`</br> ${a}`)
};


// ForEach method calls a function for each element in an array



// Do While run the loop first before checking for the condition


// Do While run the loop first before checking for the condition
 
let number1 = 10;
let number2 = 11;
do{
    // body: will run at least once even if the condition is false/ not met
    document.write(`</br> This code will be executed at least once`)
    document.write(`</br> The Value ${number1} is less than the value ${number2}`)
    number1++


}while(number1 > number2);

let number3 = 10;
let number4 = 11;
do{
    // body: will run at least once even if the condition is false/ not met
    document.write(`</br> This code will be executed at least once`)
    document.write(`</br> The value ${number3} is less than the value ${number4}`)
    number3++;
   
 
}while(number3 > number4);
 

// infinte while loop
// ForEach method calls a function for each element in an array
document.write(`</br> ForEach method calls a function for each element in an array</br>`)
let peopleArray = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam", "Nikita"];
 
// using forEach
// theArrayObject.forEeach(somefunction)
peopleArray.forEach(names);
 
 
function names(aPerson){
    // display names of people in the array
    document.write(`</br> ${aPerson}</br>`)
};


let usersArray = ["Philip", "James", "Erica", "Fatinah", "Jason", "Johanna", "Sam", "Nikita"];
document.write(`</br> update </br>`)
usersArray.forEach(usergreetings);
 
 
function usergreetings(aPerson, index, arrayObject){
    // display names of people in the array
    arrayObject[index] = "Hello "  + aPerson 
 
};
document.write(`</br> ${usersArray}</br>`);