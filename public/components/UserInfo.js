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
/*
* Lleva al constructor un objeto con los selectores de dos elementos
  (nombre del usuario y trabajo).
* Almacena un método público llamado getUserInfo(), que devuelve un
  objeto tipado con información sobre el usuario.
* Almacena un método público llamado setUserInfo(), que toma los nuevos
  datos del usuario y los agrega en la página.
*/
