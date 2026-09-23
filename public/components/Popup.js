export class Popup {
    popupElement;
    constructor(popupSelector) {
        const popup = document.querySelector(popupSelector);
        if (!popup) {
            throw new Error("No se encontró el popup");
        }
        this.popupElement = popup;
    }
    handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    };
    open() {
        this.popupElement.classList.add("popup_is-opened");
        document.addEventListener("keydown", this.handleEscClose);
    }
    close() {
        this.popupElement.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this.handleEscClose);
    }
    setEventListeners() {
        const closeButton = this.popupElement.querySelector(".popup__close");
        closeButton?.addEventListener("click", () => {
            this.close();
        });
        this.popupElement.addEventListener("mousedown", (evt) => {
            if (evt.target === this.popupElement) {
                this.close();
            }
        });
    }
}
