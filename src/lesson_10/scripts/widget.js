export function widget() {
  const btnAdd = document.querySelector('.input__control');
  const input = document.querySelector('.input');
  const inputNative = document.querySelector('.input__native');
  const output = document.querySelector('.output');

  function clickHandler() {
    console.log('CLICKED ON BTN ADD');
    const previousValue = parseFloat(output.textContent);
    const val = parseFloat(inputNative.value);

    if (!isNaN(val)) {
      output.textContent = previousValue + val
    }
    inputNative.value = '';
  }

  function focusHandler() {
    input.classList.add('input__focus');
  }

  function blurHandler() {
    input.classList.remove('input__focus');
  }

  btnAdd.addEventListener('click', clickHandler);
  inputNative.addEventListener('focus', focusHandler);
  inputNative.addEventListener('blur', blurHandler)
}