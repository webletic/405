//testing let (outputs to console)
console.log('hello developer')
console.warn('omg an error!')

let age = 30;
let name = 'Harry';
let lastname = 'Potter';

console.log(`age is a`, typeof age)

console.log(age)
console.log(`My name is ${name} ${lastname} and I am ${age} years old`)




//Creates variables for the form
const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('#msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
    //Creates a list of users
 
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`Name: ${nameInput.value} Email: ${emailInput.value}`));
    userList.appendChild(li);

  
}



