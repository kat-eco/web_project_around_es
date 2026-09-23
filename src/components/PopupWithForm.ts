import {Popup} from "./Popup.js";
import type {
    PopupFormData, 
    SubmitPopupForm
} from "../types/types.js";

export class PopupWithForm extends Popup {
    private formElement: HTMLFormElement;
    private submitCallback: SubmitPopupForm;

    constructor(popupSelector: string, submitCallback: SubmitPopupForm){
        super(popupSelector);

        const form = this.popupElement.querySelector<HTMLFormElement>
        (".popup__form")!;

        if (!form) {
      throw new Error("No se encontró el formulario");
    } 
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

    public setInputValues(data: PopupFormData): void {
        Object.keys(data).forEach((key) => {
            const input = this.formElement.elements.namedItem(key);

            if (input instanceof HTMLInputElement) {
                input.value = data[key];
            }
  });
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
        this.formElement.reset();

        super.close();
    }
}
