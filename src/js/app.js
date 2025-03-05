import app from "./firebaseConfig.js";
import FormValidation from "./form.js";
app;

//Fetching html elements
const form = document.querySelector(".form");
const formFeedbackMessage = document.querySelector(".feedbackMessage");
console.log(app);

//Adding eventlisteners

form.addEventListener("submit", (e) => {
  e.preventDefault();
  FormValidation.validation(formFeedbackMessage);
  if (!FormValidation.validation(formFeedbackMessage)) {
    return;
  }

  console.log("form submitted");
});
