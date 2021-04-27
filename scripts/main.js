
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/flower.png') {
    myImage.setAttribute ('src','images/violet.png');
  } else {
    myImage.setAttribute ('src','images/flower.png');
  }
}

// Personalized welcome message code 

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Purple is cool ' + myName;
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Purple is cool ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

