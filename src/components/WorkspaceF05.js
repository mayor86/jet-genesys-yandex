// ПРЕЗЕНТАЦИЯ ПОДПИСКИ
import Workspace from './Workspace.js'
export default class WorkspaceF05 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f5" novalidate>
                      <input id="f5-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>
                      <label class="workspace__label" for="f5-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f5-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  disabled>
                      </label>
                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}