export class UserInfo {
    nameElement;
    jobElement;
    constructor(selectors) {
        const nameElement = document.querySelector(selectors.nameSelector);
        const jobElement = document.querySelector(selectors.jobSelector);
        if (!nameElement || !jobElement) {
            throw new Error("No se encontraron los elementos del usuario");
        }
        this.nameElement = nameElement;
        this.jobElement = jobElement;
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent || "",
            description: this.jobElement.textContent || "",
        };
    }
    setUserInfo(info) {
        this.nameElement.textContent = info.name;
        this.jobElement.textContent = info.description;
    }
}
