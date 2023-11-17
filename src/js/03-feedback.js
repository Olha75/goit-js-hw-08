import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = form.querySelector("input[name='email']");
const textarea = form.querySelector("textarea[name='message']");

const getFormDataFromStorage = () => {
    const storageData = localStorage.getItem("feedback-form-state");
    return storageData ? JSON.parse(storageData) : null;
  };

  const updateLocalStorage = throttle(() => {
    const formData = {
      email: input.value,
      message: textarea.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  }, 500);

  const memoryInfo = getFormDataFromStorage();
if (memoryInfo !== null) {
  const { email, message } = memoryInfo;
  input.value = email;
  textarea.value = message;
}

input.addEventListener("input", updateLocalStorage);
textarea.addEventListener("input", updateLocalStorage);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (input.value.trim() === "" || textarea.value.trim() === "") {
    alert("Заповніть усі форми");
  } else {
    localStorage.removeItem("feedback-form-state");
    input.value = "";
    textarea.value = "";
  }
});