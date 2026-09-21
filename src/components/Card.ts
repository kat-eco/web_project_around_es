/*function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  
  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  return cardElement;
}*/

//construirá la tarjeta individual
import type { CardConfig } from "../types/types";

export class Card {
  private data: CardConfig;
  private templateElement: string; //selector
  private handleCardClick: () => void;
  
  constructor(
    data: CardConfig, 
    templateElement: string,
    handleCardClick: () => void/* Cuando el usuario haga clic en la tarjeta, esta función abrirá el popup con una imagen */
    ) {
    this.data = data;
    this.templateElement = templateElement;
    this.handleCardClick = handleCardClick;
  }

  private getTemplate(): HTMLElement {
  const template =  document.querySelector<HTMLTemplateElement>
  (this.templateElement)!;
  const cardElement = template.content.querySelector
  (".card")!.cloneNode(true) as HTMLElement; /*  si agregas if (!template) va despues de el*/

  /*if (!template) {
    throw new Error("No se encontró la plantilla de la tarjeta");
  }

  if (!cardElement) { 
    throw new Error("No se encontró el elemento cardElement"); 
}*/

  return cardElement;
}

private setEventListeners(cardElement: HTMLElement): void {
  const cardLikeButton = cardElement.querySelector<HTMLButtonElement>
  (".card__like-button");
  const cardDeleteButton = cardElement.querySelector<HTMLButtonElement>
  (".card__delete-button");
  const cardImage = cardElement.querySelector<HTMLImageElement>
  (".card__image");
 
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

public createCard(): HTMLElement { 
    const cardElement = this.getTemplate(); 
    const image = cardElement.querySelector<HTMLImageElement>
    ( ".card__image" ); 
    const title = cardElement.querySelector<HTMLElement>
    ( ".card__title" ); 
    
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