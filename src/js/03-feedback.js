
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');



const feedback = {
  email: emailEl.value,
  message: messageEl.value
}

function addLocalStorage () {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback))

}

const throttledAddToLocalStorage = throttle(addToLocalStorage, 500)

window.addEventListener('submit', (e)) = {
    

}


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