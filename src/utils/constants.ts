// guardarás las constantes principales de tu proyecto. 

 /*Este objeto contendrá los selectores y las clases 
 del formulario, y debe incluir propiedades para:

*/

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

export const defaultFormConfig = {
  inputsSelector: ".popup__input",/* El selector de los campos de entrada (inputs) */
  submitButtonSelector: ".popup__button", /* El selector del botón de envío (submit) */
  inactiveButtonClass: "popup__button_disabled", /*La clase CSS que desactiva el botón*/
  inputErrorClass: "popup__input_type_error", /*La clase CSS que añade el estilo de error al input*/
  activeErrorClass: "popup__input-error_active"/* La clase CSS que hace visible el mensaje de error de texto */
};
  