//Navigating the DOM
console.log('Document Object Model');
// DOM = whatever you have written in the <body> element, 
// it can be accessed using JavaScript in a TREE structure.

let main = document.getElementById('inOne'); 
// most popular because it's unique to that item
console.log(main); // main will print the line of HTML

// output = Hi, My name is Tim, main
let containers = document.getElementsByClassName('container')[2];
console.log(containers);
console.log(typeof containers)

//TASK - get all the p tags in a HTML document 
let paragraphs = document.getElementsByTagName("p")[2];
console.log(paragraphs);


// Can we use CSS to select the elements?
/* Syntax = document.querySelector("target")*/
// querySelector()
// querySelectorAll()

// ("#id>p")
let sell2 = document.querySelector('');
let sell1 = document.querySelector('#main>ul li'); // returns ONLY first element that matches what you are looking for
console.log(sell1);

let sell = document.querySelectorAll('#main>ul li'); // returns ALL elements that matches what you are looking 
console.log(sell);



sell1.style.backgroundColor = "#ff0000";
sell1.style.color = "#ffffff";



i = document.getElementById("gg");
i.style.backgroundColor = "darkblue";
i.style.color = "white";
i.style.fontFamily = "cursive";

newLi = document.getElementById("ii");
newLi.innerText = "New List Item";

newDiv = document.getElementById("ll");
newDiv.innerHTML = "<p> New Paragraph </p>"

// https://www.techiedelight.com/define-multiple-css-attributes-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20target,styles%20in%20the%20style%20attribute.



 




//https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php
//https://javascript.plainenglish.io/the-dom-of-javascript-848506ebf386







//Events and Listening to Events
//As it may suggest events allow something to happen, but they must "listen" for user input first
//An example of this is hovering with a mouse, or clicking a button.


    // Scenario: add an event listener to show a message when the user hovers over 
    //the paragraph


    let paragraph1 = document.getElementById("para"); // CREATE A DIFFERENT SECTION OF HTML CODE FOR THIS!!
      //
    /*paragraph1.addEventListener('mouseover', function run(){
        paragraph1.style.backgroundColor = ("#000");
        paragraph1.style.color = ("#fff"); 
        console.log('Mouse Inside');
      });*/

    paragraph1.addEventListener('mouseover',function run(){
      colorChange();
      paragraph1.style.fontFamily = 'Impact';
    }
    );

    paragraph1.addEventListener('mouseover', colorChange());

      function colorChange(){
        paragraph1.style.backgroundColor = ("#0f32ff");
        paragraph1.style.color = ("#fff");
        console.log('Mouse Inside');
      };

      //
      paragraph1.addEventListener('mouseout', function run(){
        paragraph1.style.backgroundColor = ("#fff");
        paragraph1.style.color = ("#000"); 
        paragraph1.style.fontFamily = 'Arial'
        console.log('Mouse Outside');
      });



//Syntax for Event Listeners: target.addEventListener('event type', function(){
// code to run in function;
//});


let paragraph2 = document.getElementById("para2");
let button = document.getElementById('btn');
let square = document.getElementById("pId");
    // Scenario: add an event listener to show a message when the user clicks a button.
    button.addEventListener('click', function run(){
      if(paragraph2.style.visibility != 'hidden'){  // is not 'none'
        //condition checks if text is showing.
        paragraph2.style.visibility = 'hidden'; // will hide paragraph
        button.innerText = "Show";
      }
      else{
        paragraph2.style.visibility = 'visible'; // will show paragraph
        button.innerText = "Hide";
      };
    });

function background(id){
  if (id === "pId"){
  square.style.backgroundColor = ("#867949");
  } else {
    square.style.backgroundColor = ("#777881");
  }
};

//square.addEventListener('click', background(this.id))


//Menu Code
let food = document.getElementById("food"); //Food Div
let drink = document.getElementById("drink"); // Drink Div
let menuToggle = document.getElementById("menuSwitch"); //Button

menuToggle.addEventListener("click", function toggle(){
  if(food.style.display != 'block'){ // IF FOOD DIV NOT SHOWING
    food.style.display = 'block';//SHOW THE FOOD DIV
    drink.style.display = 'none';//HIDE THE DRINK DIV
    menuToggle.innerText = "See Drink Menu"// CHANGE THE BUTTON TEXT
  } else {
    food.style.display = 'none';//HIDE THE FOOD DIV
    drink.style.display = 'block';//SHOW THE DRINK DIV
    menuToggle.innerText = "See Food Menu"// CHANGE THE BUTTON TEXT
  };
});



menuToggle.addEventListener("click", toggle())

function toggle(){
  if(food.style.display != 'block'){ // IF FOOD DIV NOT SHOWING
    food.style.display = 'block';//SHOW THE FOOD DIV
    drink.style.display = 'none';//HIDE THE DRINK DIV
    menuToggle.innerText = "See Drink Menu"// CHANGE THE BUTTON TEXT
  } else{
    food.style.display = 'none';//HIDE THE FOOD DIV
    drink.style.display = 'block';//SHOW THE DRINK DIV
    menuToggle.innerText = "See Food Menu"// CHANGE THE BUTTON TEXT
  };
}



// Task
// Create a Event that triggers when the mouse enters a div, change any styles you wish
// After create a second event the reverts the changes. 


// Challenge
// Create a concept/system where it takes user inputs and feeds back a diferent background color,
// depending on the values provided.
// Use DOM, Events and Interactions to acheive this.


//User clicks "Credit Score Button" triggers event & function

//Function to ask for user input, calls calculating function and styles based on result

//Function to calculate user input



// https://stackoverflow.com/questions/19001844/how-to-limit-the-number-of-selected-checkboxes
// https://arcade.makecode.com/75217-21763-56122-61556