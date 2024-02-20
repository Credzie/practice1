// setInterval and setTimeOut
// setTimeout() - allows us to run a function ONCE after the interval of time
// - Syntax: setTimeout(function,milliseconds) // 1000 milliseconds = 1 second

function hello(){
    console.log('hello Everyone'); 
    //everytime function is called , 
    //line 6 will appear in the console
  }

  hello(); // this is the first hello in the console
  setTimeout(hello, 10000); // 10 SECOND DELAY
  // run the function hello after 5 seonds has elapsed

  //console.log(hi); // appears at end of console
/* ---------------------------------------------------------------------- */
  function greet(name, byeText){
    console.log('Good Morning, ', name, byeText);
  }
// name = doesn't hold a value 
// byeText = doesn't hold a value 

  greet('Fred', 'See Ya'); // OUTPUT = 'GM', 'FRED', 'SEE YA'
  
  let timeOutID = setTimeout(greet, 5000, 'Rob', 'Goodbye'); 
                          //(func, time, para 1, para 2)
  // WAIT 5 SECONDS, 'GM', 'Rob', 'Goodbye'
  console.log(timeOutID); // OUTPUT = 'GM', 'Mick', 'Good Evening'

  clearTimeout(timeOutID); 
  // collects the id produced by setTimeout, 
  // and can then stop it running
  // The setTimeOut returns an ID.
  // We can use this 'id' with clearTimeOut to CLEAR 
  // the setTimeout and it will NOT RUN at all.

  // SCENARIO - you have a website where there are some articles/posts. 
  // You want to ask the user to SIGN-UP after 20 seconds. 
  // However, if the user has already clicked on the 
  // subscribe button WITHIN 20 seconds, 
  // then there is NO point in running the logic (asking them to subscribe).
  
  // TASK - BUILD THE FOLLOWING INSIDE A FUNCTION:
  // if (time>=20 seconds) and the user has subscribed (boolean) && (&& = and operator)
  // clearTimeOut
  // else the user has NOT subscribed
  // setTimeOut (20000) //20 seconds
  /*
  let sub = document.getElementById("sub");
  let sign = document.getElementById("sign");
  let wait = false;
  
  function subscribe() {
     sign.style.display = "block"
     console.log("Subscribe Function")
  };

  var subscribe1 = setTimeout(subscribe, 5000);

  sub.addEventListener("mouseover", function run() {
      wait = true
      console.log("Event Listener Working")
      if (wait == true) {
        clearTimeout(subscribe1)
        console.log("Timeout Cleared")
    };
  }); */
  


let popup = document.getElementById("popup"); // collects the popup box
function popupShow(){
  popup.style.display = "block"; // changes display style to show the popup
}

setTimeout(popupShow, 20000); // runs popup function after 20 secs

/*
link in navbar (register) - onclick which runs function


if link is clicked then timeout stops running - use id name and check if it matches

else timeout continues and popup appears.
let popup = document.getElementById("popup");
*/









  function ask() {
    response = confirm("Hi Welcome to our site, we hope your are enjoy our content! To see more please subscribe :)");
    console.log(response);
    return subscribe(response);
  };

  function request(){
    popup =  prompt('Would you like to see more content?');
    return popup;
  };
    // popup initial feedback if cancelled (null)
    // unless the user has actually typed in the prompt input, result will return 0 (null, 0).

    //this example waits for the user to respond to the prompt asked by popup. 
    //If user selects cancel then null will return, which has a number value of 0. 

  //console.log(Number(null) === 0); // true    === (type and value) == (equal to)

  //let countdown = setTimeout(ask, 2000);

  function subscribe(x){
    console.log(x);
    if(Number(x) == 0){   // could change this section in the if statement brackets
      console.log(x);
      var countdown = setTimeout(request, 20000);
    } else {
      clearTimeout(countdown);
    }
  };

  //ask();
  /* Version 2 
  function ask1(){
    registered = ask();
    for(i=0; i<=21; i++){
      if (i > 20 && registered == false){
        setTimeout(request, 20000); 
      } else {
        clearTimeout(request);
     };
    };
  };
  //ask1();
    
 
  */

 // ask - call in inside if section, 

// Comparison Operators

// ==	equal to
// ===	equal value and equal type  a="7"  b=7  a==b(true)    a===b(false)
// !=	not equal
// !==	not equal value or not equal type

// >	greater than 
// <	less than
// >=	greater than or equal to
// <=	less than or equal to




  // setInterval
  // setInterval() - allows us to run the function REPEATEDLY after the interval of time - 
  // clock
  // - Syntax: setInterval(function,milliseconds)

  function talk(name, byeText){
    console.log('Good Morning, ', name, byeText); // GM GN T
  };

  let intervalID = setInterval(talk, 5000, 'Tim', 'Goodnight'); 
  //(function, time in ms, parameter1, parameter2, etc. )
  clearInterval(intervalID);



// confirm feedback 
// ok = true , cancel = false
function feedback(){
  let userResponse = confirm("Would you like to register to our site?");

  if (userResponse == false){
    setInterval(popup, 60000);
  }
  else{
    let message = document.querySelector("#popup>p");
    message.innerText = "Thank for registering on our site"
    message.innerHTML +="<button> close </button>"
  }
}











// Date and Time in JavaScript
let date1 = new Date();
console.log(date1);

const d = new Date(); // Date(milliseconds). 
console.log(d);

// default = browser's Time Zone and displayed as full text string
// example output: --> Fri Apr 01 2022 16:23:37 GMT+0100 (British Summer Time)
d.setMonth(9)
const d2 = d.getMonth(); //9
console.log(d); //123 //2023

//1900 + 123 = 2023

// We can place 7 numbers inside the brackets (122, 3(Apr), 13, 10, 30, 35, 0), 
// BUT must have at least 2 (Year, Month)
// This is the order( year, month, day(number of), hour, minute, second, millisecond)

// months start at 0 (Jan) and stop at 11(Dec). A greater number will overflow to next year
//e.g. month value 12 = Jan of next year, 23 = Dec of next year

const history = new Date(45,6,11) // 1945, July, 11th 
console.log(history);

const myDate = new Date("1800, 7, 9"); // 1800, July, 9th
console.log(myDate);


document.getElementById("text").innerText = myDate.toDateString();

let date2 = {day:"2-digit", month:"short", year:"numeric",
                               hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h24"}
console.log(date2)

const date = d.toLocaleString('default', {day:"2-digit", month:"short", year:"numeric",
                               hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h24"});
const month = d.toLocaleString('default', { month:'long'}); // Aug
const year = d.getFullYear();

document.getElementById("date").innerText = date;
document.getElementById("month").innerText = month;
document.getElementById("year").innerText = year;

function updatingClock() {
  var currentTime = new Date(),
      month = currentTime.getMonth() + 1,
      day = currentTime.getDate(),
      year = currentTime.getFullYear(),
      hours = currentTime.getHours(),
      minutes = currentTime.getMinutes(),
      seconds = currentTime.getSeconds(),
      text = (month + "/" + day + "/" + year + ' ' + hours + ':' + minutes + ':' + seconds);
  // here we get the element with the id of "date" and change the content to the text variable we made above
  document.getElementById('date').innerHTML = text;
}

// here we run the updatingClock function every 1000ms (1 second)
setInterval(updatingClock, 1000);

// JS Project









//API 
/* 
What are they?
https://www.infoworld.com/article/3269878/what-is-an-api-application-programming-interfaces-explained.html


Free and Open API's
https://blog.hubspot.com/website/free-open-apis


News API (On list above)
https://newsapi.org/

*/



// API KEY for NEW API -(NEWSAPIKEY)

/*
let apiNewsKey = NewsApiKey;

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-04-13&' +
          'sortBy=popularity&' +
          'apiKey= {insert your api key here}';
          
var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    });
*/

let outputDate = document.getElementById('date');
outputDate.innerHTML += `Dates</br>`;
const date3 = new Date();
outputDate.innerHTML += `date3 = ${date3}`;

date3.setMonth(5);
const date4 = date3.getMonth
outputDate.innerHTML += `</br>New date3 = ${date3}`;

const pastHistory = new Date(124, 5, 6);
outputDate.innerHTML += `</br>pastHistory = ${pastHistory}`;

const birthDate = new Date(90, 5, 6);
outputDate.innerHTML += `</br> birthDate = ${birthDate}`;

const totalDate = date3.toLocaleString('default', {day:"2-digit", month:"short", year:"numeric",
hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h24"});

const totalmonth = date3.toLocaleString('default', { month:'long'}); // Aug
const totalyear = date3.getFullYear();

outputDate.innerHTML += `</br></br>Task: New Timeline`;

outputDate.innerHTML += `</br>Date = ${date}`;
outputDate.innerHTML += `</br>Month = ${month}`;
outputDate.innerHTML += `</br>Year = ${year}`;

