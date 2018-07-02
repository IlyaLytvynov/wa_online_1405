export function validate(enteredValue) {
  const invalidSymbol = ['/', '+', '=', '/', '?', '>', '<', '{', '}', '[', ']', '^', '*', '%', '$', '#', '@', '!'];
  let isValid = true;

  for (let i = 0; i < enteredValue.length; i++) {
    if(isValid === false) {
      break;
    }
    if (invalidSymbol.indexOf(enteredValue[i])) {
      isValid = false;
      break;
    }
  }

  return isValid;
}