// ВЫБРАТЬ ВИД ОПЛАТЫ
import Workspace from './Workspace.js'
export default class WorkspaceF10 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f10" novalidate>
                      <input id="f10-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>          

                      <label class="workspace__label" for="f10-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f10-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  disabled>
                      </label>

                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}