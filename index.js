// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Input
const optionRule =
  '{1069} AND ({1070} OR {1071} OR {1072}) AND {1244} AND ({1245} OR {1339})';
const newData = optionRule.split('AND {');
const outputResult = newData.map((r) => {
  return {
    and: [
      r.split('AND ({').shift().trim().replace(/\D/g, ''),
      {
        or: r.split('AND ({').pop().match(/\d+/g),
      },
    ],
  };
});
console.log(outputResult);

appDiv.innerHTML = JSON.stringify(outputResult);
