import type {UserInfoData, 
    UserInfoSelectors} from "../types/types";

export class UserInfo {
    private nameElement: HTMLElement;
    private jobElement: HTMLElement;

    constructor(selectors: UserInfoSelectors){
        const nameElement = document.querySelector<HTMLElement>
        (selectors.nameSelector)!;

        const jobElement = document.querySelector<HTMLElement>
        (selectors.jobSelector)!;

        /*if (!nameElement || !jobElement) { 
        throw new Error("No se encontraron los elementos del usuario"); 
        }*/

        this.nameElement = nameElement;
        this.jobElement = jobElement;
    }

    public getUserInfo(): UserInfoData {
        return { 
            name: this.nameElement.textContent || "", 
            description: this.jobElement.textContent || "", 
        };
    }

    public setUserInfo(info: UserInfoData): void {
        this.nameElement.textContent = info.name; 
        this.jobElement.textContent = info.description;
    }
}

/* 
* Lleva al constructor un objeto con los selectores de dos elementos 
  (nombre del usuario y trabajo).
* Almacena un método público llamado getUserInfo(), que devuelve un 
  objeto tipado con información sobre el usuario.
* Almacena un método público llamado setUserInfo(), que toma los nuevos 
  datos del usuario y los agrega en la página. 
*/
