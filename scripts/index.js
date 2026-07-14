import { disableBtn } from "./validate.js";

//PROFILE VARIABLES
const profile = document.querySelector(".profile");
const profileEditBtn = profile.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector("#edit-popup");
const profileEditCloseBtn = profileEditPopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
//PROFILE FORM VALIABLES
const profileEditForm = profileEditPopup.querySelector("#edit-profile-form");
const profileNameInput = profileEditForm.querySelector(
  ".popup__input_type_name",
);
const profileDescriptionInput = profileEditForm.querySelector(
  ".popup__input_type_description",
);
const profileSubmitBtn = profileEditForm.querySelector(".popup__button");
//CARD VARIABLES
const cardTemplate = document.querySelector("#template-card");
const cardsContainer = document.querySelector(".cards__list");
const cardAddPopup = document.querySelector("#new-card-popup");
//CARD FORM VARIABLES
const newCardPopup = document.querySelector("#new-card-popup");
const cardNameInput = newCardPopup.querySelector(
  ".popup__input_type_card-name",
);
const cardLinkInput = newCardPopup.querySelector(".popup__input_type_url");
const cardAddBtn = profile.querySelector(".profile__add-button");
const cardAddCloseBtn = cardAddPopup.querySelector(".popup__close");
const cardSubmitBtn = cardAddPopup.querySelector(".popup__button");
const newCardForm = document.querySelector("#new-card-form");

const imagePopup = document.querySelector("#image-popup");
const imagePopupImg = imagePopup.querySelector(".popup__image");
const imagePopupCaption = imagePopup.querySelector(".popup__caption");
const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");

const inputs = document.querySelectorAll(".popup__input");

let initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

function setOverlayClose(modal) {
  modal.addEventListener("click", (evt) => {
    if (evt.target === modal) {
      closeModal(modal);
    }
  });
}

function pressEscClose(modal) {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      const openedPopup = document.querySelector(".popup_is-opened");
      if (openedPopup) {
        closeModal(openedPopup);
      }
    }
  });
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

function getCardElement(
  name = "Sin título",
  link = "./images/placeholder.jpg",
) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_is-active");
  });
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    imagePopupImg.src = link;
    imagePopupImg.alt = name;
    imagePopupCaption.textContent = name;

    openModal(imagePopup);
  });

  return cardElement;
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
