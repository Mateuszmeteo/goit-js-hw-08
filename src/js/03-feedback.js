
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');

// const submitEl = document.querySelector('button[type = "submit"]')




const addLocalStorage = () => {
  const feedback = {
  email: emailEl.value,
  message: messageEl.value
}
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback))
  // console.log(feedback)
}

  const throttledAddLocalStorage = throttle(addLocalStorage, 500);


window.addEventListener('load', (e) => {
  e.preventDefault()
  const storageParse = localStorage.getItem(LOCALSTORAGE_KEY);
  JSON.parse(storageParse);
  emailEl.value = storageParse.email || '';
  messageEl.value = storageParse.message || '';
  console.log(localStorage)

}) 



/// funkcja czyszcząca....///







// function loadLocalStorage () {
//   feedback = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
// }

// emailEl.addEventListener('input',throttle(addToLocalStorage, 500))
// messageEl.addEventListener('input',throttle(addToLocalStorage, 500))

















// updateOutput();
// form.addEventListener('submit', saveMessage);

// function saveMessage(e) {
//     e.preventDefault();
//     localStorage.setItem(LOCALSTORAGE_KEY, form.element.message.value);
//     updateOutput();
//     form.reset();
// }
// function updateOutput() {
//     output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
//   }







// function addLocalStorage () {
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback))
//   // console.log(feedback)
// }

// window.addEventListener('submit', (e) => {
//   e.preventDefault()
//   localStorage.getItem(LOCALSTORAGE_KEY, JSON.stringify(feedback))
//   console.log(addLocalStorage())

// }) 