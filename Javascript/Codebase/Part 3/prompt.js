// The default data type for prompt is string. Therefore, no data conversion is required
// let user = prompt("Enter your username");


// //Use parseInt for numberic whole number with prompt to convert user input to integer data type
// let num1 = parseInt(prompt("Enter your first number: "));
// let num2 = parseInt(prompt("Enter your secondnumber: "));
// let total = num1 + num2
 
// document.write(`</br> The answer to  ${num1}  + ${num2} = ${total} `)

// Use parsefloat for decimal numbers with prompt to convert user input to decimal/float data type


// document.write(`welcome ${user}`);

// Task 1: follow the exampe above to use the parsefloat to convert to a float/decimal data type

let num3 = parseFloat(prompt("Enter your Float please: "));
let num4 = parseFloat(prompt("Enter Your Second Float please: "));
let total2 = num3 + num4;

document.write(`</br> The answer to total of selected numbers are:  ${num3}  + ${num4} = ${total2} `);

