// Functions for Asdd, Subtract, Multiply and Divide
function sumAway(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) - Number(valueTwo); // convert string value to a number value
  };
  
  //
  function sumDiv(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) / Number(valueTwo); // convert string value to a number value
  };
  
  //
  function sumMulti(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) * Number(valueTwo); // convert string value to a number value
  };
  
  function sumUp(valueOne, valueTwo) {
    //convert strings to numbers and add together  
    return Number(valueOne) + Number(valueTwo); // convert string value to a number value
  };

  

  // define some basic variables we need for the calculate function
  const operator = document.getElementById('operations');
  const numberOne = document.getElementById('numberone'); //INPUT 1
  const numberTwo = document.getElementById('numbertwo'); //INPUT 2
  const result = document.getElementById('result'); //Output



// Using If/Else
function calculate(){
    if( operator.value === "-"){
      var calc = sumAway(numberOne.value, numberTwo.value); 
    }
    else if (operator.value === "/"){
      var calc = sumDiv(numberOne.value, numberTwo.value); 
    }
    else if (operator.value === "x"){
      var calc = sumMulti(numberOne.value, numberTwo.value); 
    }
    else {
      var calc = sumUp(numberOne.value, numberTwo.value); 
    }
  
    result.value = calc.toString();
  };

// Using Switch Case
  function calculate(){
  switch(operator.value){
    case "/":
      var calc = sumDiv(numberOne.value, numberTwo.value); 
      result.value = calc.toString();
    break;
  
    case "-":
      var calc= sumAway(numberOne.value, numberTwo.value);
      //result.value = calc.toString();
    break;
  
    case "x":
      var calc = sumMulti(numberOne.value, numberTwo.value);
      //result.value = calc.toString();
    break;
    
    case "+":
      var calc = sumUp(numberOne.value, numberTwo.value);
    break;
  
    default:
    result.value = "Error";
    break;
  };
  result.value = calc.toString();
  };