import { Popup } from "./Popup";
export class PopupWithForm extends Popup {
    formElement;
    submitCallback;
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        const form = this.popupElement.querySelector(".popup__form");
        /* if (!form) {
      throw new Error("No se encontró el formulario");
    } */
        this.formElement = form;
        this.submitCallback = submitCallback;
    }
    getInputValues() {
        const inputElements = this.formElement.querySelectorAll(".popup__input");
        const inputValues = {};
        inputElements.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }
    setEventListeners() {
        super.setEventListeners();
        this.formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
            const inputValues = this.getInputValues();
            this.submitCallback(inputValues);
        });
    }
    close() {
        super.close();
        this.formElement.reset();
    }
}
/*
* Crea PopupWithForm como una clase hija de Popup.
* Lleva un callback del envío del formulario al constructor
  (crea un tipo para esta función), así como el selector popup.
* Almacena un método privado llamado getInputValues(), que
  recopila datos de todos los campos de entrada y devuelve un
  objeto tipado.
* Sobrescribe el método setEventListeners() para agregar al
  formulario un controlador de eventos submit (SubmitEvent).
* Sobrescribe el método padre close() para reiniciar el
  formulario una vez se cierre el popup.
*/ 
