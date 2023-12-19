// Write a program that will ask the user for their first name and then their surname and then will display their full name. 

let fName = prompt("Enter your firstname: ");
let lName = prompt("Enter your Second Name: ")

let fullName = fName +""+ lName;

document.write(`</br> Welcome to the page ${fullName}`);

// Write a program that asks for 3 numbers (num1, num2 and num3).  Display the output where it adds together num1 and num2 and then multiplies this total by num3. 

let num1 = prompt("Enter your first Number: ");

let num2 = prompt("Enter your Second Number: ");
let num3 = prompt("Enter your Third Number: ");

let totalNum = (num1 + num2) % num3;
document.write(`</br> The Total of the Numbers you selected is ${totalNum}`);

// Ask the width, length and depth of a swimming pool and then work out the amount of water that the swimming pool will hold in cubic meters. 

document.write("The total area of the swimming pool in cubic meters: ");

let width = parseFloat(prompt("Enter the Width of the swimming pool"));
let length = parseFloat(prompt("Enter the Length of the swimming pool"));
let depth = parseFloat(prompt("Enter the Depth of the swimming pool"));

let areaOfswimingPool = width * length * depth;
document.write(`</br> The total Are of the swimming pool is:  ${areaOfswimingPool}cm3`);

// Ask the user to input the number of hours a worker has worked in a week. 
// Ask the user to also enter the amount that worker earns per hour. Work out the total pay the worker should get for the week’s work. 

let workedHours = parseFloat(prompt("Enter Number of hours you have worked the week"));
let payPerHour = parseFloat(prompt("Enter your payrate here per hour"));

let totalPayOfWorker = workedHours * payPerHour;
document.write(`</br> The total Pay this week is: £${totalPayOfWorker}`);







