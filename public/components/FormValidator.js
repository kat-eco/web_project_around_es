export class FormValidator {
    object;
    formElement;
    constructor(object, formElement) {
        this.object = object;
        this.formElement = formElement;
    }
    showInputError(input, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${input.id}-input-error`);
        input.classList.add(this.object.inputErrorClass);
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add(this.object.activeErrorClass);
        }
    }
    hideInputError(input) {
        const errorElement = this.formElement.querySelector(`.${input.id}-input-error`);
        input.classList.remove(this.object.inputErrorClass);
        if (errorElement) {
            errorElement.textContent = "";
            errorElement.classList.remove(this.object.activeErrorClass);
        }
    }
    checkInputValidity(input) {
        if (!input.validity.valid) {
            this.showInputError(input, input.validationMessage);
        }
        else {
            this.hideInputError(input);
        }
    }
    toggleButtonState() {
        const button = this.formElement.querySelector(this.object.submitButtonSelector);
        if (!button) {
            return;
        }
        if (this.formElement.checkValidity()) {
            button.disabled = false;
            button.classList.remove(this.object.inactiveButtonClass);
        }
        else {
            button.disabled = true;
            button.classList.add(this.object.inactiveButtonClass);
        }
    }
    setEventListeners() {
        const inputs = this.formElement.querySelectorAll(this.object.inputsSelector);
        inputs.forEach((input) => {
            input.addEventListener("input", (evt) => {
                const currentInput = evt.target;
                this.checkInputValidity(currentInput);
                this.toggleButtonState();
            });
        });
        this.toggleButtonState();
    }
    /* activa la validación del formulario */
    enableValidation() {
        this.setEventListeners();
    }
    /* limpia los errores visuales de los inputs y actualiza el estado del botón de envío. Utilizarás este método para reiniciar el estado del formulario cada vez que el usuario abra un modal*/
    resetValidation() {
        const inputs = this.formElement.querySelectorAll(this.object.inputsSelector);
        inputs.forEach((input) => {
            this.hideInputError(input);
        });
        this.toggleButtonState();
    }
}
