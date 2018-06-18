function requestNumber() {
  return prompt('Enter number', '') || '';
}

export function userInputCounter() {
  let inputs = [];
  let userInput = requestNumber();
  let total = 0;

  while (userInput.length > 0 && !isNaN(Number(userInput))) {
    inputs.push(userInput);
    userInput = requestNumber();
  }

  for (let i = 0; i < inputs.length; i++) {
    total = total + Number(inputs[i]);
  }

  return total;
}