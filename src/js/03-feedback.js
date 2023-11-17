import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = form.querySelector("input[name='email']");
const textarea = form.querySelector("textarea[name='message']");

const memoryInfo = JSON.parse(LocalStorage.getItem("feedback-form-state"))
if(memoryInfo !==null){
    const {email, message}=memoryInfo;
    input.value = email;
    textarea.value=message;
}

form.addEventListener("submit", function (event){
    event.preventDefault();
    if(input.value===" "||textarea.value===" "){
        alert ("Заповніть усі форми")
    } else {const storage = LocalStorage.getItem("feedback-form-state");
console.log(JSON.parse(storage));
localStorage.removeItem("feedback-form-state")
input.value=" "
textarea.value=" "}
}) 