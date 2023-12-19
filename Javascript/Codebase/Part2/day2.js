// Part 2: selection Programming construct

// Strings in Javascript

// Part 2: Selection programming Construct
 
 
/* Strings in JavaScript
 
Strings functions
 
Type Conversion and Coercion
 
Scope: If, Else conditionals & Switch case (operators) */

//<br/> works in the browser and in the console window
document.write("He said hello that </br>");
document.write('"He said "hello" that </br>"');
document.write("He said 'Hello' that </br>");
document.write("He said \"hello\" that </br>");




// \n and \u000a works in the console window and not in the browser
document.write(`</br>`);
let quote = "</br> He said \nhello that ";
let quote2 = "</br> He said \u000ahello that";

document.write(quote);
document.write(quote2);
console.log(quote);


// return the length of a string
let breakfast = "toast";
let lunch = "chicken salad";
let dinner = "Mash";
let mealCost = 12;

document.write(`</br> The Number of characters in ${breakfast} is ${breakfast.length}`);

// returns uppercase
document.write(`</br> Upper Case ${breakfast.toUpperCase()}`);
// returns lowercase
document.write(`</br> lower Case ${breakfast.toLowerCase()}`);
// replace one string with another string value
document.write(`</br> ${dinner}`);
document.write(`</br> Replace a string with another string ${dinner.replace("Mash", "Fries")}`);

// slice [part of a string]

document.write(`</br> Sliced ${lunch}: ${lunch.slice(2,7)} `);
document.write(`</br> Sliced ${lunch}: ${lunch.slice(2,-2)} `);

// returns
document.write(`</br> substring ${lunch.substring(4,9)}`);

// returns the index value of a character
document.write(`</br> index of ${breakfast.indexOf("e")}`);
document.write(`</br> index of ${dinner.indexOf("a")}`);
document.write(`</br> index of ${lunch.indexOf("a")}`);
document.write(`</br> last index of ${breakfast.lastIndexOf()}`);

let mealCost2 = 12.34686;

// returns the value to the allocated ecimal point
document.write(`</br> ${mealCost2.toFixed(1)}`);
document.write(`</br> ${mealCost2.toFixed(2)}`);
document.write(`</br> ${mealCost2.toFixed(3)}`);

let toFixedMealCost = mealCost.toFixed(4)
document.write(`</br> ${toFixedMealCost}`);
document.write(`</br> ${typeof toFixedMealCost}`);



// returns
document.write(`</br>`);
// returns
document.write(`</br>`);





// Type coercion: Automatically dobne by the JS interpreter
let num1 = 10;
let name = "Paul";

let num2 = 11;
let num3 = 12;



 // converting a number data type into a string datatype and pass it to a variable call num2String


document.write("<br/>This Data Type is converted from a number to a : ", typeof String(num2)," <br/>" );
let numberToString = String(num3)
document.write(`</br> ${numberToString}`);
document.write(`</br> ${typeof toFixedMealCost}`);


let num4 = "500";
let stringNum = Number(num4);
document.write(`<br/>${stringNum}: , ${typeof stringNum}, <br/>` );

stringnum = parseInt(num4)
document.write(`</br> ${stringnum}: ${typeof stringnum}</br>`);
 
 
let num5 = "500.566"
let floatNum = parseFloat(num4)
document.write(`</br> ${floatNum}: ${typeof floatNum}</br>`);

let num6 = 1
let boolNum = Boolean(num6)
document.write(`</br> ${boolNum}: ${typeof boolNum}</br>`);




// document.write("<br/>", ," <br/>")



 document.write("<br/> If, Else if and Else <br/>");
document.write("<br/> <br/>");
 
// JavaScript Selection
/*

*******************************************
if (condition){
   do something
}
else{
   do something else, because the condion above is not met
}

// 
if (condition){
   do something
}
else if (another condition){
   do another thing
}
else{
   do something else, because none of the condion above are met
}


*/
let userNum = 23;
let computerNum = 22;
// == - Eual to
if (userNum == computerNum){
    console.log("The value are the same")
    document.write(`</br> The value ${userNum} is the same as ${computerNum}`)
} else {
    console.log("The value are not the same !!")
    document.write(`</br> The value ${userNum} is not the same as ${computerNum} !!!</br>`)

};
// Using the Ternary Operator (:) 
document.write(`</br>Ternary operator instead of if else </br> `);
 
let numberCheck = (userNum == computerNum) ? "The values are the same":"The values are not the same!!!!";
 
console.log(numberCheck);
document.write(numberCheck);



let systemPassword = "Password";
let userPass = "password";

if(systemPassword === userPass){
    console.log("Welcome user")
    document.write("Welcome User, Passwaord login successful")
}
else{
    console.log("Incorrect Password")
    document.write("Incorrect Password")
};
// 
document.write(`<br> </br>`);
if(userNum > computerNum){
    console.log(`<br> ${userNum} is bigger.  </br>`)
document.write(`<br> ${userNum} is bigger than ${computerNum} </br>`)

}else if(computerNum > userNum){
    console.log(`<br> ${computerNum} is bigger.  </br>`)
document.write(`<br> ${computerNum} is bigger than ${userNum} </br>`)

}else if(computerNum === userNum){
    console.log(`<br> ${computerNum} and ${userNum} is the same.  </br>`)
document.write(`<br> ${userNum} is the same as ${computerNum} </br>`)
}else{
    console.log(`<br> Invalid input! </br>`)
    document.write("</br> Incorrect Password </br>")
};

// 
if (userNum >20 && computerNum <= 50){
    console.log(`</br> Valid  .</br>`)
    document.write(`</br>Valid .</br></br>`)}
 
else{
    console.log(`</br> invalid .</br>`)
    document.write(`</br>invalid.</br></br>`)
 
}
 
if (userNum >20 && userNum <= 50){
    console.log(`</br> Valid  .</br>`)
    document.write(`</br>Valid .</br></br>`)}
 
else{
    console.log(`</br> invalid .</br>`)
    document.write(`</br>invalid.</br></br>`)
 
}
 
 


// numbers if,
//  else Names if, 
// else if,
//  else

 
// === - Equal Value and Equal Data Type
let trafficLight = "Green";
//  let stopWait = "Red";
//  let getReady = "Yellow"
 
 
if(trafficLight === "Green"){
    console.log("Safe to cross the road")
    document.write(`</br> Safe to cross the road `)
 
}else if (trafficLight === "Red") {
    console.log("Not Safe to cross the road")
    document.write(`</br>Not Safe to cross the road on`)
}  else if (trafficLight ==="Yellow"){
     console.log("Ready to cross the road")
    document.write(`</br>ready to cross the road on `)
} else{
   console.log("faulty traffic lights, beware of other road users before crossing")
document.write(`</br>"faulty traffic lights, beware of other road users before crossing`)
};
 
if (trafficLight === "Red" || trafficLight === "Amber"){
    console.log(`</br> Stop.</br>`)
    document.write(`</br>Stop</br></br>`)}
 
else{
    console.log(`</br> Go .</br>`)
    document.write(`</br>Go</br></br>`)
 
};


// Switch case 
// let varAday = "AdayOfTheWeek";

/* switch(varAday) {
    case "day1":
        document.write("some text to displa")
        break;
    case "day2":
        document.write("some text to displa")
        break;
    case "day3":
        document.write("some text to displa")
        break;
    case "day4":
        document.write("some text to displa")
        break;
    case "day5":
         document.write("some text to displa")
        break;
    default:
        document.write("some text to displa")
} */

let day = "Friday";
 
switch(day){
    case "Monday":
        document.write("Today is Monday")
        break; // exit if the case is a match
    case "Tuesday":
        document.write("Today is Tuesday")
        break; // exit if the case is a match
    case "Wednesday":
        document.write(`Today is ${day}`)
        break; // exit if the case is a match
    case "Thursday":
        document.write("Today is Thursday")
        break; // exit if the case is a match
    case "Friday":
        document.write("Today is Friday")
        break; // exit if the case is a match
    default:
        document.write(`Today is the Weekend}`)
};

let custAge = 18;

if(custAge > 18){
    console.log("Customer is Allowed to be served")
    document.write(`</br> Customer ${custAge} is allowed service`)
}else if( custAge = 18){
    console.log("Customer is Allowed to be served")
    document.write(`</br> Customer ${custAge} is allowed service`)
}else{
    console.log("Customer is Not! Allowed to be served")
    document.write(`</br> Customer ${custAge} Not! is allowed service`)
};