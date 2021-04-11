import Workspace from './Workspace.js'
export default class WorkspaceF01 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f1" novalidate>
                      <label class="workspace__label" for="f1-phone-input">
                        Номер для набора
                        <input id="f1-phone-input" type="text" class="workspace__input-el" name="phone" disabled>
                      </label>
                      <label class="workspace__label" for="f1-company-input">
                        Название компании
                        <input id="f1-company-input" type="text" class="workspace__input-el" name="company" disabled>
                      </label>
                      <label class="workspace__label" for="f1-lpr-input">
                        Имя ЛПР
                        <input id="f1-lpr-input" type="text" class="workspace__input-el" name="lpr" disabled>
                      </label>
                      <label class="workspace__label" for="f1-status-input">
                        Статус
                        <input id="f1-status-input" type="text" class="workspace__input-el" name="status" disabled>
                      </label>
                      <label class="workspace__label" for="f1-branch-input">
                        Отрасль
                        <input id="f1-branch-input" type="text" class="workspace__input-el" name="branch" disabled>
                      </label>
                      <label class="workspace__label" for="f1-comment-input">
                        Комментарий
                        <input id="f1-comment-input" type="text" class="workspace__input-el" name="comment" disabled>
                      </label>
                      <label class="workspace__label" for="f1-address-input">
                        Адрес
                        <input id="f1-address-input" type="text" class="workspace__input-el" name="address" disabled >
                      </label>
                      <label class="workspace__label" for="f1-answers-input" >
                        Ответы на вопросы
                        <input id="f1-answers-input" type="text" class="workspace__input-el" name="answers" >
                      </label>
                      <label class="workspace__label" for="f1-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f1-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  disabled>
                      </label>
                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}