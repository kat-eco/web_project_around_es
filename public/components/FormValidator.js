/*la lógica de validación se encontraba en funciones globales dentro
del archivo validate.js y las clases CSS estaban codificadas de forma
rígida (hardcoded) directamente en el código.
Siguiendo los principios de la POO, las clases deben ser
universales y reutilizables. Por lo tanto, ahora tu objetivo
es encapsular esa funcionalidad en la nueva clase FormValidator
y pasarle las clases CSS a través de un objeto de configuración.*/
export class FormValidator {
    object;
    formElement;
    constructor(object, formElement) {
        this.object = object;
        this.formElement = formElement;
    }
    /*function showInputError(
      element: HTMLInputElement,
      errorMessage: string
    ): void {
      const errorElement = document.querySelector<HTMLSpanElement>
      (`.${element.id}-input-error`);
    
      element.classList.add("popup__input_type_error");
      errorElement.textContent = errorMessage;
      errorElement.classList.add("popup__input-error_active");
    }*/
    showInputError(input, errorMessage) {
        const errorElement = this.formElement.querySelector(`.${input.id}-input-error`);
        input.classList.add(this.object.inputErrorClass);
        if (errorElement) {
            errorElement.textContent = errorMessage;
            errorElement.classList.add(this.object.activeErrorClass);
        }
    }
    /*function hideInputError(
    element: HTMLInputElement
    ): void {
    const errorElement: HTMLSpanElement = document.querySelector
    (`.${element.id}-input-error`)!;
    
    element.classList.remove("popup__input_type_error");
    errorElement.classList.remove("popup__input-error_active");
    errorElement.textContent = "";
  }*/
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
/*function disableBtn(
  form: HTMLFormElement,
  button: HTMLButtonElement
): void{
  button.disabled = !form.checkValidity();

  form.addEventListener("input", () => {
    if (!form.checkValidity()) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });

  validateErrorMessage();
}*/
/*function validateErrorMessage(): void {
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(".popup__input");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (!input.validity.valid) {
        showInputError(input, input.validationMessage);
      } else {
        hideInputError(input);
      }
    });
  });
}*/
