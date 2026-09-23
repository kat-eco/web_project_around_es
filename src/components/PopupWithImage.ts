import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    private imageElement: HTMLImageElement;
    private captionElement: HTMLParagraphElement;

    constructor(popupSelector: string) {
        super(popupSelector);
    
    const image = this.popupElement.querySelector<HTMLImageElement>
    (".popup__image")!; 
    const caption = this.popupElement.querySelector<HTMLParagraphElement>
    (".popup__caption")!;

    if (!image || !caption) { 
    throw new Error(
    "No se encontraron los elementos de la imagen"
    ); 
    } 

    this.imageElement = image; 
    this.captionElement = caption;
    }

    public open(imageLink?: string, caption?: string): void { 
        if (imageLink) 
            this.imageElement.src = imageLink; 
        if (caption) {  
            this.imageElement.alt = caption; 
            this.captionElement.textContent = caption;
        }
        
        super.open(); 
    } 
}


/* 
* Crea PopupWithImage como una clase hija de Popup.
* Sobrescribe el método padre open(). En este método, debes 
añadir una imagen al popup y el correspondiente atributo src 
junto con una leyenda.
*/