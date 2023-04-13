
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');









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