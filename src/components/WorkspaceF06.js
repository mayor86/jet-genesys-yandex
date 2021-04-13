// ПРЕЗЕНТАЦИЯ РЕКЛАМЫ В ЯНДЕКС КАРТАХ
import Workspace from './Workspace.js'
export default class WorkspaceF06 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f6" novalidate>
                      <input id="f6-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>
                      <label class="workspace__label" for="f6-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f6-lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}" disabled>
                      </label>
                    </form>`;
  }

  
}