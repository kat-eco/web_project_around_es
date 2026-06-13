const profile = document.querySelector(".profile");
const profileEditBtn = profile.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector("#edit-popup");
const profileEditForm = profileEditPopup.querySelector("#edit-profile-form");
const profileEditCloseBtn = profileEditPopup.querySelector(".popup__close");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const profileNameInput = profileEditForm.querySelector(
  ".popup__input_type_name",
);
const profileDescriptionInput = profileEditForm.querySelector(
  ".popup__input_type_description",
);
const profileSubmitBtn = profileEditForm.querySelector(".popup__button");

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

initialCards.forEach(function (card) {
  return console.log(card.name);
});

function openModal(modal) {
  modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

profileEditBtn.addEventListener("click", () => handleOpenEditModal());
profileEditCloseBtn.addEventListener("click", () =>
  closeModal(profileEditPopup),
);

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  fillProfileForm();
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

profileEditForm.addEventListener("submit", handleProfileFormSubmit);
