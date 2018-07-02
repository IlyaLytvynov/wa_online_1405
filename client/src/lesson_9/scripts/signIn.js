import { validate } from './validate.js';

export function signIn() {
  const userName = prompt('Enter your name, ', '');
  let isValid = validate(userName);

  if (isValid === true) {
    console.log(`Hello ${userName}`);
  } else {
    signIn();
  }
}