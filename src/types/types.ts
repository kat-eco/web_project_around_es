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

export interface PopupFormData { 
  [key: string]: string; 
} 

export type SubmitCallback = (data: PopupFormData) => void;

export interface UserInfoData { 
  name: string; 
  description: string; 
} 

export interface UserInfoSelectors { 
  nameSelector: string; 
  jobSelector: string; 
}