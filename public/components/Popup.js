export class Popup {
    popupElement;
    constructor(popupSelector) {
        const popup = document.querySelector(popupSelector);
        /* if (!popup) {
        throw new Error("No se encontró el popup");
        } */
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
/* Crea la jerarquía de clases para las ventanas modales aplicando herencia
(cada clase debe estar en su propio archivo con el mismo nombre):

* El constructor tiene un solo parámetro, que es el selector del popup.
* Almacena los métodos públicos open() y close(), que abrirán y cerrarán el
popup.
Almacena un método privado llamado handleEscClose(), que almacena la lógica
* para cerrar el popup al pulsar la tecla Esc (tipa el evento como
KeyboardEvent).
* Almacena un método público llamado setEventListeners(), que agrega un
detector de eventos de click al icono para cerrar el popup y al área
sombreada. */ 
