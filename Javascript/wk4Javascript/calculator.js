// Basic Calculator - 
//an example to how we can link functions to HTML elements and get user input values

// sumUp will take 2 values and add them together
function sumUp(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) + Number(valueTwo); // convert string value to a number value
  };
 
  // define some basic variables we need for the calculate function
  const operator = ? // operation
  const numberOne = ? //INPUT 1
  const numberTwo = ? //INPUT 2
  const result = ? //Output
  
  
  //Calculate - the fuction that brings it all together
  function calculate(){
    //sum calls the sumUP function and valueOne and valueTwo are provided inside brackets
    let sum = sumUp(numberOne.value, numberTwo.value); //
    // numberOne.value = will get the input from the user for that box (2, 67, 890)
    result.value = sum.toString();
    //result is converted to a string and applied to the value property of our result input
  };/**/