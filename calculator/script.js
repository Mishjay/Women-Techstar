const result = document.getElementById("result");

const input = document.getElementById("input");

const inputList = ['+', '-', 'x', '÷', 1,2,3,4,5,6,7,8,9,0,'.', 'C', "="];


function getUserValue(value) {
  const ignoreDisplay = ['C', '='];
  if (!ignoreDisplay.includes(value)) {
    result.innerText = value
  }
}
for (let value of inputList){
  const className = value === '=' ? 'equal' : 'button';
  const button = document.createElement("div");
  button.innerText = value;
    button.className = className;

  button.addEventListener("click", ()=> {
  getUserValue(value)
  });
  input.appendChild(button);
}
