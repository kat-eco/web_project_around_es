// renderizará la lista completa de tarjetas
// produce una tarjeta con texto y un enlace a la imagen:

import type { SectionConfig } from "../types/types.js";

export class Section<T> {
    private items: T[];
    private renderer: (card: T) => void;
    private container: HTMLElement;

    constructor(
        { items, renderer }: SectionConfig<T>, 
        containerSelector: string   
    ) {
        this.items = items;
        this.renderer = renderer;

        const container = document.querySelector<HTMLElement>
        (containerSelector)!;

    if (!container) { 
        throw new Error("No se encontró el contenedor"); 
    } 
    
    this.container = container;
    }

    public renderItems(): void { 
        this.items.forEach((item) => { 
            this.renderer(item); 
        }); 
    } 

    public addItem(element: HTMLElement): void { 
        this.container.append(element); 
    }
}
    