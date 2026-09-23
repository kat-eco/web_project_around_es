
export class Popup {
    protected popupElement: HTMLElement;

    constructor(popupSelector: string) {
        const popup = document.querySelector<HTMLElement>(popupSelector)!;

        if (!popup) { 
        throw new Error("No se encontró el popup"); 
        } 

        this.popupElement = popup;
    }

    private handleEscClose = (evt: KeyboardEvent): void => {
    if (evt.key === "Escape") { 
        this.close();
      }
    };
    
    public open(): void {
        this.popupElement.classList.add("popup_is-opened");

        document.addEventListener("keydown", this.handleEscClose);
    }
        
    public close(): void {
        this.popupElement.classList.remove("popup_is-opened");

        document.removeEventListener("keydown", this.handleEscClose);
    }

    public setEventListeners(): void {
        const closeButton = this.popupElement.querySelector<HTMLButtonElement>
        (".popup__close");

        closeButton?.addEventListener("click", () => { 
            this.close(); 
        });

        this.popupElement.addEventListener("mousedown", (evt: MouseEvent) => {
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