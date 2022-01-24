function calc(operand, num1, num2)  {

  const isNotValid = ( typeof num1 != 'number' || typeof num2 != 'number' || isNaN(num1) || isNaN(num2));

  if (isNotValid) {
    return 'error'
  }
    switch (operand) {
      case 'sum':
        return num1 + num2;
      break;
      
      case 'sub':
        return num1 - num2;
      break;

      case 'multipl':
        return num1 * num2;
      break;

      case 'div': 
        if ( num2 === 0) {
          return 'Error! Division by zero is not possible'
        } else {
          return num1 / num2;
        }
      break;

      default:
        return 'Unknown operation';
    }
  }

console.log(calc('div'));