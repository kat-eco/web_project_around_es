export interface FormValidatorConfig {//used on FormValidator.ts
  inputsSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  activeErrorClass: string;
}

export interface CardConfig { //used on Card.ts
  placeName: string;
  imageLink: string;
}

export interface SectionConfig<T> { //used on Section.ts
  items: T[]; 
  renderer: (item: T) => void; 
} 

export interface PopupFormData { //used on PopupWithForm.ts
  [key: string]: string; 
} 

export type SubmitPopupForm = (data: PopupFormData) => void;
//used on PopupWithForm.ts

export interface UserInfoSelectors { //used on UserInfo.ts
  nameSelector: string; 
  jobSelector: string; 
}

export interface UserInfoData { //used on UserInfo.ts
  name: string; 
  description: string; 
} 
