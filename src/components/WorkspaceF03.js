// ВЫХОД НА ЛПР / ВЫХОД НА ЛПР(ВТОРОЙ ЭТАП ПРОДАЖИ)
import Workspace from './Workspace.js'
export default class WorkspaceF03 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f3" novalidate>
                      
                        <input id="f3-hello-input" type="text" class="workspace__input-el" name="hello" disabled>
                      
                      
                        <input id="f3-lpr-input" type="text" class="workspace__input-el" name="lpr" placeholder="Имя ЛПР" value="${this._state.lpr}">
                      
                      
                        
                        <input id="f3-phone-input" type="text" class="workspace__input-el" name="phone"  placeholder="Телефон" value="${this._state.phone}">
                      
                     
                        
                        <input id="f3-job-title-input" type="text" class="workspace__input-el" name="job-title"  placeholder="Должность" value="${this._state.jobTitle}">
                     
                      
                       
                        <input id="f3-email-input" type="text" class="workspace__input-el" name="email"  placeholder="E-mail" value="${this._state.email}">
                   
            
                    </form>`;
  }

  
}