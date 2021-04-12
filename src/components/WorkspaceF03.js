// ВЫХОД НА ЛПР / ВЫХОД НА ЛПР(ВТОРОЙ ЭТАП ПРОДАЖИ)
import Workspace from './Workspace.js'
export default class WorkspaceF03 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f3" novalidate>
                      <label class="workspace__label" for="f3-hello-input">
                        Номер для набора
                        <input id="f3-hello-input" type="text" class="workspace__input-el" name="hello" disabled>
                      </label>
                      <label class="workspace__label" for="f3-lpr-input">
                        Название компании
                        <input id="f3-lpr-input" type="text" class="workspace__input-el" name="lpr" disabled>
                      </label>
                      <label class="workspace__label" for="f3-phone-input">
                        Имя ЛПР
                        <input id="f3-phone-input" type="text" class="workspace__input-el" name="phone" disabled>
                      </label>
                      <label class="workspace__label" for="f3-job-title-input">
                        Статус
                        <input id="f3-job-title-input" type="text" class="workspace__input-el" name="job-title" disabled>
                      </label>
                      <label class="workspace__label" for="f3-email-input">
                        Отрасль
                        <input id="f3-email-input" type="text" class="workspace__input-el" name="email" disabled>
                      </label>
            
                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}