
const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const email = document.querySelector(".fb-form-email");
const message = document.querySelector(".fb-form-message");

getDataToFillForm();

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);

function onFormInput(e) {

  const formDataObj = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

  formDataObj[e.target.name] = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formDataObj));
}

function onFormSubmit(e) {
  e.preventDefault();

  const eml = email.value.trim();
  const msg = message.value.trim();

  if (eml && msg) {
    localStorage.removeItem(STORAGE_KEY)
    e.currentTarget.reset();
    console.log({eml, msg});
  }
}

function getDataToFillForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    email.value = savedData.email;
    message.value = savedData.message;
  }

}