// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

export const add = (a, b) => {
  return a + b;
};

export const calculateSum = () => {
  const results = [2, 2].reduce(add);
  document.getElementById('sum-result').innerHTML = results;
}

calculateSum();