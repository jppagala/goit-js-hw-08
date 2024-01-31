// ###############################################################
// Variable Declarations and Assignments
// ###############################################################

const _ = require('lodash');

const emailField = document.querySelector("input[type='email']");
const messageField = document.querySelector("textarea[name='message']");
const feedbackForm = document.querySelector('form.feedback-form');

const feedbackFormState = {
  email: '',
  message: '',
};

// ###############################################################
// Functions
// ###############################################################
function storeStates() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function storeEmail() {
  feedbackFormState.email = emailField.value;
  storeStates();
}

function storeMessage() {
  feedbackFormState.message = messageField.value;
  storeStates();
}

function checkFieldStates() {
  const storedStates = localStorage.getItem('feedback-form-state');
  const parsedStates = JSON.parse(storedStates);

  if (parsedStates !== null) {
    emailField.value = parsedStates.email;
    messageField.value = parsedStates.message;
  }
}

function clearFields() {
  emailField.value = '';
  messageField.value = '';
}

function submitForm(event) {
  event.preventDefault();

  const storedStates = localStorage.getItem('feedback-form-state');
  const parsedStates = JSON.parse(storedStates);
  console.log(parsedStates);

  clearFields();
  storeEmail();
  storeMessage();
}

// ###############################################################
// Initialization
// ###############################################################

emailField.addEventListener('input', _.throttle(storeEmail, 500));
messageField.addEventListener('input', _.throttle(storeMessage, 500));
feedbackForm.addEventListener('submit', submitForm);

checkFieldStates();
