
let secondbox =document.getElementById("second-box ");
let openChatBtn=document.getElementById("openChatBtn");

function clickButton() {
  secondbox .style.display='block';
}
openChatBtn.addEventListener('click',clickButton);

let firstbox=document.getElementById('firstbox');
let buttondown=document.getElementById('button-down');

function clickButton2() {
  secondbox .style.display='none';
}

buttondown.addEventListener('click',clickButton2);