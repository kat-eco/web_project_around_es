"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableBtn = disableBtn;
exports.showInputError = showInputError;
exports.hideInputError = hideInputError;
exports.validateErrorMessage = validateErrorMessage;
/* antes era function, solo lo hice class */
function disableBtn(form, button) {
    button.disabled = !form.checkValidity();
    form.addEventListener("input", () => {
        if (!form.checkValidity()) {
            button.disabled = true;
        }
        else {
            button.disabled = false;
        }
    });
    validateErrorMessage();
}
/* antes era function, solo lo hice class */
function showInputError(element, errorMessage) {
    const errorElement = document.querySelector(`.${element.id}-input-error`);
    element.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_active");
}
/* antes era function, solo lo hice class */
function hideInputError(element) {
    const errorElement = document.querySelector(`.${element.id}-input-error`);
    element.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__input-error_active");
    errorElement.textContent = "";
}
function validateErrorMessage() {
    const inputs = document.querySelectorAll(".popup__input");
    inputs.forEach((input) => {
        input.addEventListener("input", function () {
            if (!input.validity.valid) {
                showInputError(input, input.validationMessage);
            }
            else {
                hideInputError(input);
            }
        });
    });
}
//# sourceMappingURL=validate.js.map