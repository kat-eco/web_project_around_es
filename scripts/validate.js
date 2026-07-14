export function disableBtn(form, button) {
  button.disabled = !form.checkValidity();

  form.addEventListener("input", () => {
    if (!form.checkValidity()) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  validateErrorMessage();
}

export function showInputError(element, errorMessage) {
  const errorElement = document.querySelector(`.${element.id}-input-error`);
  element.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
}

export function hideInputError(element) {
  const errorElement = document.querySelector(`.${element.id}-input-error`);
  element.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
}

export function validateErrorMessage() {
  const inputs = document.querySelectorAll(".popup__input");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
      } else {
        hideInputError(input);
      }
    });
  });
}
