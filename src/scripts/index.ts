import { disableBtn, showInputError, hideInputError } from "./validate.js";

//PROFILE VARIABLES
const profile = document.querySelector<HTMLElement>(".profile")!;
const profileEditBtn = profile.querySelector<HTMLButtonElement>(".profile__edit-button");
const profileEditPopup = document.querySelector<HTMLElement>("#edit-popup")!;
const profileEditCloseBtn = profileEditPopup.querySelector<HTMLButtonElement>(".popup__close");
const profileTitle = document.querySelector<HTMLHeadingElement>(".profile__title");
const profileDescription = document.querySelector<HTMLParagraphElement>(".profile__description");
//PROFILE FORM VALIABLES
const profileEditForm = profileEditPopup.querySelector<HTMLFormElement>("#edit-profile-form")!;
const profileNameInput = profileEditForm.querySelector<HTMLInputElement>(
  ".popup__input_type_name",
);
const profileDescriptionInput = profileEditForm.querySelector<HTMLInputElement>(
  ".popup__input_type_description",
);
const profileSubmitBtn = profileEditForm.querySelector<HTMLButtonElement>(".popup__button");
//CARD VARIABLES
const cardTemplate = document.querySelector<HTMLTemplateElement>("#template-card");
const cardsContainer = document.querySelector<HTMLUListElement>(".cards__list");
const cardAddPopup = document.querySelector<HTMLDivElement>("#new-card-popup")!;
//CARD FORM VARIABLES
const cardNameInput = cardAddPopup.querySelector<HTMLInputElement>(
  ".popup__input_type_card-name",
);
const cardLinkInput = cardAddPopup.querySelector<HTMLInputElement>(".popup__input_type_url");
const cardAddBtn = profile.querySelector<HTMLButtonElement>(".profile__add-button");
const cardAddCloseBtn = cardAddPopup.querySelector<HTMLButtonElement>(".popup__close");
const cardSubmitBtn = cardAddPopup.querySelector<HTMLButtonElement>(".popup__button");
const newCardForm = document.querySelector<HTMLFormElement>("#new-card-form");

const imagePopup = document.querySelector<HTMLDivElement>("#image-popup")!;
const imagePopupImg = imagePopup.querySelector<HTMLImageElement>(".popup__image");
const imagePopupCaption = imagePopup.querySelector<HTMLParagraphElement>(".popup__caption");
const imagePopupCloseBtn = imagePopup.querySelector<HTMLButtonElement>(".popup__close");


function setOverlayClose(modal) {
  
} 

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
  profileSubmitBtn.disabled = !profileEditForm.checkValidity();
  openModal(profileEditPopup);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const newName = profileNameInput.value;
  const newDescription = profileDescriptionInput.value;

  profileTitle.textContent = newName;
  profileDescription.textContent = newDescription;

  closeModal(profileEditPopup);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardTitle = cardNameInput.value;
  const newCardLink = cardLinkInput.value;

  renderCard(newCardTitle, newCardLink, cardsContainer);
  closeModal(cardAddPopup);
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.prepend(cardElement);
}

initialCards.forEach((card) => {
  renderCard(card.name, card.link, cardsContainer);
});

function handleCardFormModal() {
  openModal(cardAddPopup);
}

function setEventListeners() {
  // PROFILE
  profileEditBtn.addEventListener("click", handleOpenEditModal);
  profileEditCloseBtn.addEventListener("click", () =>
    closeModal(profileEditPopup),
  );

  profileEditForm.addEventListener("submit", handleProfileFormSubmit);

  // CARDS
  cardAddBtn.addEventListener("click", handleCardFormModal);
  cardAddCloseBtn.addEventListener("click", () => closeModal(cardAddPopup));

  newCardForm.addEventListener("submit", handleCardFormSubmit);

  // IMAGE POPUP
  imagePopupCloseBtn.addEventListener("click", () => closeModal(imagePopup));
}

setEventListeners();
disableBtn(profileEditForm, profileSubmitBtn);
disableBtn(newCardForm, cardSubmitBtn);
setOverlayClose(profileEditPopup);
setOverlayClose(cardAddPopup);
setOverlayClose(imagePopup);
pressEscClose(profileEditPopup);
pressEscClose(cardAddPopup);
pressEscClose(imagePopup);
