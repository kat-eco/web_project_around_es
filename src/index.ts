import {Card} from "./components/Card.js";
import {FormValidator} from "./components/FormValidator.js";
import {Popup} from "./components/Popup.js";
import {PopupWithForm} from "./components/PopupWithForm.js";
import {PopupWithImage} from "./components/PopupWithImage.js";
import {Section} from "./components/Section.js";
import {UserInfo} from "./components/UserInfo.js";

import type { CardConfig, 
    FormValidatorConfig, 
    UserInfoData, } from "./types/types.js";

import {initialCards} from "./utils/constants.js";

const defaultFormConfig: FormValidatorConfig = {
  inputsSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  activeErrorClass: "popup__input-error_active",
};

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});

const imagePopup = new PopupWithImage("#image-popup");

const profilePopup = new PopupWithForm(
  "#edit-popup",
  (data) => {
    userInfo.setUserInfo({
      name: data.name,
      description: data.description,
    });

    profilePopup.close();
  }
);

let cardsSection: Section<CardConfig>;

const newCardPopup = new PopupWithForm(
  "#new-card-popup",
  (data) => {
    const cardData: CardConfig = {
      placeName: data["place-name"],
      imageLink: data.link,
    };

    const card = new Card(
      cardData,
      "#template-card",
      () => {
        imagePopup.open(cardData.imageLink, cardData.placeName);
      }
    );
    
    cardsSection.addItem(card.createCard());

    newCardPopup.close();
  }
);

cardsSection = new Section<CardConfig>(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        item,
        "#template-card",
        () => {
          imagePopup.open(item.imageLink, item.placeName);
        }
      );

      cardsSection.addItem(card.createCard());
    },
  },
  ".cards__list"
);

cardsSection.renderItems();

// Validación de formularios
const editForm = document.querySelector<HTMLFormElement>(
  "#edit-profile-form"
);

const newCardForm = document.querySelector<HTMLFormElement>(
  "#new-card-form"
);

if (editForm) {
  const editFormValidator = new FormValidator(
    defaultFormConfig,
    editForm
  );

  editFormValidator.enableValidation();
}

if (newCardForm) {
  const newCardFormValidator = new FormValidator(
    defaultFormConfig,
    newCardForm
  );

  newCardFormValidator.enableValidation();
}

// setEventListeners para los popups
profilePopup.setEventListeners();
newCardPopup.setEventListeners();
imagePopup.setEventListeners();

const profileEditButton =
  document.querySelector<HTMLButtonElement>(".profile__edit-button");

const addCardButton =
  document.querySelector<HTMLButtonElement>(".profile__add-button");

profileEditButton?.addEventListener("click", () => {
  const currentUser = userInfo.getUserInfo();

  const nameInput =
    profilePopup["formElement"].querySelector<HTMLInputElement>(
      ".popup__input_type_name"
    );

  const descriptionInput =
    profilePopup["formElement"].querySelector<HTMLInputElement>(
      ".popup__input_type_description"
    );


  if (nameInput && descriptionInput) {
    nameInput.value = currentUser.name;
    descriptionInput.value = currentUser.description;
  }

  profilePopup.open();
});

addCardButton?.addEventListener("click", () => {
  newCardPopup.open();
});

