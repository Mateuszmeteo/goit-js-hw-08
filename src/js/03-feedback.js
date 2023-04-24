
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name = "email"]');
const messageEl = document.querySelector('textarea[name = "message"]');

// const submitEl = document.querySelector('button[type = "submit"]')

///zapis danyc do form///

const addLocalStorage = () => {
  const feedback = {
  email: emailEl.value,
  message: messageEl.value
};
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback))
}
  

///// fynkcja wczytujaca dane do localstorage i wypełnia pola form

const loadLocalStorage = () => {
  const feedback =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  emailEl.value = feedback.email || '';
  messageEl.value = feedback.message || '';
};


/////// funkcja czyszczaca localstorage i pola form po wysłaniu form


const clearLocalStorage = () => {
  const feedback =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  localStorage.removeItem(LOCALSTORAGE_KEY);
  emailEl.value = '';
  messageEl.value = '';
  console.log(feedback);
};


//////// sledzenie zdarzenia na input i zapis stanu do localstorage

emailEl.addEventListener('input', throttle(addLocalStorage, 500));
messageEl.addEventListener('input', throttle(addLocalStorage, 500));

////////// wczytywanie danych z localstorage po przeladowaniu strony

document.addEventListener('DOMContentLoaded', loadLocalStorage);


////// czyszczenie danych po wysłaniu form 

formEl.addEventListener('submit', event => {
  event.preventDefault();
  clearLocalStorage();
});













//////////////////////////////////////////////////////////////////



  // const throttledAddLocalStorage = throttle (e => {
  //   emailEl = input.value;
  //   messageEl = input.value;
  //   localStorage.setItem(JSON.stringify({emailEl, messageEl}))
  // },500)
  
  // form.addEventListener('input', throttledAddLocalStorage)
  
  
  
  // (addLocalStorage, 500);


// window.addEventListener('load', (e) => {
//   e.preventDefault()
//   const storageParse = localStorage.getItem(LOCALSTORAGE_KEY);
//   JSON.parse(storageParse);
//   emailEl.value = storageParse.email || '';
//   messageEl.value = storageParse.message || '';
//   console.log(localStorage)

// }) 



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