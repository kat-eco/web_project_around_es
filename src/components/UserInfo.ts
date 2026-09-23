import type {UserInfoData, 
    UserInfoSelectors} from "../types/types.js";

export class UserInfo {
    private nameElement: HTMLElement;
    private jobElement: HTMLElement;

    constructor(selectors: UserInfoSelectors){
        const nameElement = document.querySelector<HTMLElement>
        (selectors.nameSelector)!;

        const jobElement = document.querySelector<HTMLElement>
        (selectors.jobSelector)!;

        if (!nameElement || !jobElement) { 
        throw new Error("No se encontraron los elementos del usuario"); 
        }

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
