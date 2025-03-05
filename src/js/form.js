class FormValidation {
  static validation(feedbackMessage) {
    feedbackMessage.textContent = "";
    const fieldsToValidate = [
      { name: "name", message: "please input what you want us to call you" },
      { name: "email", message: "please input your email address" },
      { name: "phone", message: "please input your phone number" },
      { name: "message", message: "please input your message for us" },
    ];
    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id= ${field.name}]`);
      inputField.addEventListener("input", () => {
        feedbackMessage.textContent = "";
        inputField.classList.remove("inputfield__error");
      });
      if (!inputField.value.trim()) {
        inputField.classList.add("inputfield__error");
        feedbackMessage.textContent = field.message;
        return false;
      }
    }
    return true;
  }
  static formStore(nameInput, emailInput, phoneInput, messageInput) {}
}

export default FormValidation;
