// functions is a block of codes used to invoke a task
function hello(){
    console.log("welcome to Javascript");
}
hello();

function age(age1, age2){
    return age1 * age2
};

let combineAge = age(33, 45)
console.log(combineAge)
document.write(combineAge)

let firstAge = 20;
let secondAge = 33;
let totalAge = age(firstAge,secondAge);
console.log(totalAge);
document.write("</br>", totalAge);

let money = 20;

function compound(){
    let compound = money + (money * 0.01);
    let year2 = compound * 1.02;
    let year3 = year2 * 1.02;
    return [year3,year2,compound]

};

function alphaSort(input){
    return input.split("")
    .sort()
    .join("");
  }
  
  let userString = prompt("Type a word to sort aplhabetically");
  console.log(alphaSort(userString))
  document.write

// task1
let person = {
    name: "mark",
    age: 32,
    city: "london",
};
console.log(person);
// task2
let films = {
    action:{
        name: "Avengers",
        year: 2010,
        rating: 10 
    },
    comedy:{
        name:"scary movie",
        year: 2001,
        rating: 8
    },
    fantasy:{
        name: "Harry Potter",
        year: 2005,
        rating: 9
    }
}
console.log(films);

// let firstName = "jason";
// let surName = "umeyor";

// function greeting(firstName, surName){
//     return (`Hello , ${firstName} + ${surName}, How is your day going?`)

// };

// document.write(greeting())
// let welcome =greet(prompt('What is your firstname?'), prompt('What is your surname?'));
// console.log(welcome);

let main = document.getElementById("practice");
console.log(main)

let query1 = document.querySelector("h1")
query1.style.backgroundColor = "#ff0000";
query1.style.color = "blue";
console.log(query1)

// let query2 = document.querySelectorAll('#parentbox>ul li')
// // query2.style.backgroundColor = "red";
// query2.style.color = "yellow";
// console.log(query2)

newLi = document.getElementById("list");
newLi.innerText = "New list items";
newDiv = document.getElementById('list');
newDiv.innerHTML = '<p>Credzie is the goat</P>';