export class Card {
    data;
    templateElement; //selector
    handleCardClick;
    constructor(data, templateElement, handleCardClick /* Cuando el usuario haga clic en la tarjeta, esta función abrirá el popup con una imagen */) {
        this.data = data;
        this.templateElement = templateElement;
        this.handleCardClick = handleCardClick;
    }
    getTemplate() {
        const template = document.querySelector(this.templateElement);
        const cardElement = template.content.querySelector(".card").cloneNode(true);
        if (!template) {
            throw new Error("No se encontró la plantilla de la tarjeta");
        }
        if (!cardElement) {
            throw new Error("No se encontró el elemento cardElement");
        }
        return cardElement;
    }
    setEventListeners(cardElement) {
        const cardLikeButton = cardElement.querySelector(".card__like-button");
        const cardDeleteButton = cardElement.querySelector(".card__delete-button");
        const cardImage = cardElement.querySelector(".card__image");
        cardLikeButton?.addEventListener("click", () => {
            cardLikeButton.classList.toggle("card__like-button_is-active");
        });
        cardDeleteButton?.addEventListener("click", () => {
            cardElement.remove();
        });
        cardImage?.addEventListener("click", () => {
            this.handleCardClick();
        });
    }
    createCard() {
        const cardElement = this.getTemplate();
        const image = cardElement.querySelector(".card__image");
        const title = cardElement.querySelector(".card__title");
        if (image) {
            image.src = this.data.imageLink;
            image.alt = this.data.placeName;
        }
        if (title) {
            title.textContent = this.data.placeName;
        }
        this.setEventListeners(cardElement);
        return cardElement;
    }
}
