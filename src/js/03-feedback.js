import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const input = form.querySelector("input[name='email']");
const textarea = form.querySelector("textarea[name='message']");