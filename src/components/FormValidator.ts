import type { FormValidatorConfig } from "../types/types.js";

export class FormValidator {
  private object: FormValidatorConfig;
  private formElement: HTMLFormElement;

  constructor(
    object: FormValidatorConfig, 
    formElement: HTMLFormElement
  ) {
    this.object = object;
    this.formElement = formElement;
  }

  private showInputError( 
    input: HTMLInputElement, 
    errorMessage: string 
  ): void { 
    const errorElement = this.formElement.querySelector<HTMLSpanElement>
    ( `.${input.id}-input-error` ); 
    
    input.classList.add(this.object.inputErrorClass); 
    
    if (errorElement) { 
      errorElement.textContent = errorMessage; 
      errorElement.classList.add(this.object.activeErrorClass); 
    } 
  }

  private hideInputError(
    input: HTMLInputElement
  ): void { 
    const errorElement = this.formElement.querySelector<HTMLSpanElement>
    ( `.${input.id}-input-error` ); 
    
    input.classList.remove(this.object.inputErrorClass); 
    
    if (errorElement) { 
      errorElement.textContent = ""; 
      errorElement.classList.remove(this.object.activeErrorClass); 
    } 
  }

  private checkInputValidity(input: HTMLInputElement): void {
     if (!input.validity.valid) { 
      this.showInputError(input, input.validationMessage); 
    } else { 
      this.hideInputError(input); 
    } 
  }

  private toggleButtonState(): void { 
    const button = this.formElement.querySelector<HTMLButtonElement>
    ( this.object.submitButtonSelector ); 
    
    if (!button) { 
      return; 
    } 
    
    if (this.formElement.checkValidity()) { 
      button.disabled = false; 
      button.classList.remove(this.object.inactiveButtonClass); 
    } else { 
      button.disabled = true; 
      button.classList.add(this.object.inactiveButtonClass); 
    } 
  }
  
  private setEventListeners(): void { 
    const inputs = this.formElement.querySelectorAll<HTMLInputElement>
    ( this.object.inputsSelector ); 
    inputs.forEach((input) => { 
      input.addEventListener("input", (evt: InputEvent) => { 
        const currentInput = evt.target as HTMLInputElement; 
        this.checkInputValidity(currentInput); 
        this.toggleButtonState(); }); }); 
        this.toggleButtonState(); 
      }

  /* activa la validación del formulario */
  public enableValidation(): void { 
    this.setEventListeners(); 
  }

  /* limpia los errores visuales de los inputs y actualiza el estado del botón de envío. Utilizarás este método para reiniciar el estado del formulario cada vez que el usuario abra un modal*/
  public resetValidation(): void { 
    const inputs = this.formElement.querySelectorAll<HTMLInputElement>
    ( this.object.inputsSelector ); 
    inputs.forEach((input) => { 
      this.hideInputError(input); 
    }); 
    this.toggleButtonState(); 
  }
}
