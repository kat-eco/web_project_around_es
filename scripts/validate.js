export function disableBtn(form, button) {
  button.disabled = !form.checkValidity();

  form.addEventListener("input", () => {
    if (!form.checkValidity()) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}

function showInputError(element, errorMessage) {
  const errorElement = document.querySelector(`.${element.id}-input-error`);
  element.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
}

function hideInputError(element) {
  const errorElement = document.querySelector(`.${element.id}-input-error`);
  element.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
}

inputs.forEach((input) => {
  input.addEventListener("input", function () {
    if (!input.validity.valid) {
      showInputError(input, input.validationMessage);
    } else {
      hideInputError(input);
    }
  });
});
