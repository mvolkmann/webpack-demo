import * as Math from './math.js';
require('./demo.less');

window.onload = () => {
  const input = document.getElementById('numberInput');
  const div = document.getElementById('result');
  const btn = document.getElementById('doubleBtn');

  btn.onclick = () => {
    const value = input.value;
    div.textContent = Math.double(value);
  };
};
