function calc(operand, num1, num2){
 let result;
 const isNotValid = (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2));
if (isNotValid) {
  result = 'Error'
  } else if (operand === 'sum') {
    result = num1 + num2;
  } else if (operand === 'sub'){
    result = num1 - num2;
  } else if (operand === 'multipl'){
    result = num1 * num2;
  }  else if (operand === 'div'){
    if ( num2 === 0 )  {
    result = 'Unknown operation'
    } else {
      result = num1 / num2;
    } 
  } else {
    result = 'Unknown operation'
  }
  return result;
}


console.log(calc('div', 2, 2))
