import add from './add.js';
import subtract from './subtract.js';
import multiply from './multiply.js';
import divide from './divide.js';

const userInput = process.argv;

if (userInput[3] === 'plus') {
  const firstNum = parseInt(userInput[2]);
  const secondNum = parseInt(userInput[4]);
  console.log(add(firstNum, secondNum));
}

if (userInput[3] === 'minus') {
  const firstNum = parseInt(userInput[2]);
  const secondNum = parseInt(userInput[4]);
  console.log(subtract(firstNum, secondNum));
}

if (userInput[3] === 'over') {
  const firstNum = parseInt(userInput[2]);
  const secondNum = parseInt(userInput[4]);
  console.log(divide(firstNum, secondNum));
}

if (userInput[3] === 'times') {
  const firstNum = parseInt(userInput[2]);
  const secondNum = parseInt(userInput[4]);
  console.log(multiply(firstNum, secondNum));
}
