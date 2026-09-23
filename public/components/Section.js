// renderizará la lista completa de tarjetas
// produce una tarjeta con texto y un enlace a la imagen:
export class Section {
    items;
    renderer;
    container;
    constructor({ items, renderer }, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        const container = document.querySelector(containerSelector);
        if (!container) {
            throw new Error("No se encontró el contenedor");
        }
        this.container = container;
    }
    renderItems() {
        this.items.forEach((item) => {
            this.renderer(item);
        });
    }
    addItem(element) {
        this.container.append(element);
    }
}
