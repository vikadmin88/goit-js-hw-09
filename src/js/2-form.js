
const FORM_STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

const formStorageObj = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) ?? {email: "", message: ""};
getDataToFillForm(formStorageObj);


form.addEventListener("input", onFormInput);

function onFormInput(e) {
  formStorageObj[e.target.name] = e.target.value.trim();
  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formStorageObj));
}


form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const eml = form.elements.email.value.trim();
  const msg = form.elements.message.value.trim();

  if (eml && msg) {
    localStorage.removeItem(FORM_STORAGE_KEY)
    e.currentTarget.reset();
    console.log({eml, msg});
  }
}

function getDataToFillForm(savedDataObj) {
  Object.keys(savedDataObj).forEach(it => {
    if (savedDataObj[it]) {
      form.elements[it].value = savedDataObj[it];
    }
  });
}