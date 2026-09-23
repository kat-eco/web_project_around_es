// guardarás las constantes principales de tu proyecto. 

import type {CardConfig, FormValidatorConfig} from "../types/types.js";

 /*Este objeto contendrá los selectores y las clases 
 del formulario, y debe incluir propiedades para:

*/

export const initialCards: CardConfig[] = [
  {
    placeName: "Valle de Yosemite",
    imageLink: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    placeName: "Lago Louise",
    imageLink: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    placeName: "Montañas Calvas",
    imageLink: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    placeName: "Latemar",
    imageLink: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    placeName: "Parque Nacional de la Vanoise",
    imageLink: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    placeName: "Lago di Braies",
    imageLink: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

export const defaultFormConfig: FormValidatorConfig = {
  inputsSelector: ".popup__input",/* El selector de los campos de entrada (inputs) */
  submitButtonSelector: ".popup__button", /* El selector del botón de envío (submit) */
  inactiveButtonClass: "popup__button_disabled", /*La clase CSS que desactiva el botón*/
  inputErrorClass: "popup__input_type_error", /*La clase CSS que añade el estilo de error al input*/
  activeErrorClass: "popup__input-error_active"/* La clase CSS que hace visible el mensaje de error de texto */
};
  