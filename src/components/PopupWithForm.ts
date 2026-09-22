import {Popup} from "./Popup";
import type {
    PopupFormData, 
    SubmitPopupForm
} from "../types/types";


export class PopupWithForm extends Popup {
    private formElement: HTMLFormElement;
    private submitCallback: SubmitPopupForm;

    constructor(popupSelector: string, submitCallback: SubmitPopupForm){
        super(popupSelector);

        const form = this.popupElement.querySelector<HTMLFormElement>
        (".popup__form")!;

        /* if (!form) {
      throw new Error("No se encontró el formulario");
    } */
        this.formElement = form; 
        this.submitCallback = submitCallback;
    }

    private getInputValues(): PopupFormData {
        const inputElements = this.formElement.querySelectorAll<HTMLInputElement>
        (".popup__input");
        const inputValues: PopupFormData = {};

        inputElements.forEach((input) => {
            inputValues[input.name] = input.value;
        });
        
        return inputValues;
    }

    public setEventListeners(): void {
        super.setEventListeners();
        this.formElement.addEventListener("submit", (evt: SubmitEvent) => {
            evt.preventDefault();
            const inputValues = this.getInputValues();
            this.submitCallback(inputValues);
        });
    }

    public close(): void {
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