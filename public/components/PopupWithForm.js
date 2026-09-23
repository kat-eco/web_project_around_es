import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    formElement;
    submitCallback;
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        const form = this.popupElement.querySelector(".popup__form");
        if (!form) {
            throw new Error("No se encontró el formulario");
        }
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
    setInputValues(data) {
        Object.keys(data).forEach((key) => {
            const input = this.formElement.elements.namedItem(key);
            if (input instanceof HTMLInputElement) {
                input.value = data[key];
            }
        });
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
        this.formElement.reset();
        super.close();
    }
}
