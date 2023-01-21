'use strict';

const clearButton = document.querySelector('.clear'),
  input = document.querySelector('.calc-input'),
  calc = document.querySelector('.calc'),
  equalButton = document.querySelector('.equal'),
  back = document.querySelector('.delete');

class Calculator {
  constructor() {
    // show key
    calc.addEventListener('click', this._showKey);

    // Clear all input
    clearButton.addEventListener('click', this._clearAllInput);

    // backpace button
    back.addEventListener('click', this._backSpace);

    // Equal button
    equalButton.addEventListener('click', this._equalTo);
  }

  _showKey(e) {
    const key = e.target.closest('.btn');
    if (!key) return;
    const keyContent = key.textContent;
    if (keyContent === 'x') return (input.value += '*');
    input.value += keyContent;
  }

  _clearAllInput() {
    input.value = '';
  }

  _backSpace() {
    if (!input.value) return;

    input.value = input.value.slice(0, -1);
  }

  _equalTo() {
    if (!input.value) return;
    try {
      input.value = eval(input.value);
    } catch {
      input.value = 'error!';
    }
  }
}
const calculator = new Calculator();
