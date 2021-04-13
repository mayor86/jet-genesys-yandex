// Оплата как юр. Лицо (не предоставил реквизиты)
import Workspace from './Workspace.js'
export default class WorkspaceF12 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f12" novalidate>
                      <input id="f12-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>

                      <input id="f12-first-call-date-input" type="date" class="workspace__input-el" name="first-call-date" placeholder="Дата первого звонка" value="${this._state.firstCallDate}">
                      <input id="f12-lpr-input" type="text" class="workspace__input-el" name="lpr" placeholder="Имя ЛПР" value="${this._state.lpr}">
                      <input id="f12-phone-input" type="text" class="workspace__input-el" name="phone" placeholder="Телефон" value="${this._state.phone}">
                      <input id="f12-kp-date-input" type="text" class="workspace__input-el" name="kp-date" placeholder="Дата отправки КП" value="${this._state.kpDate}">
                      <input id="f12-job-title-input" type="text" class="workspace__input-el" name="job-title" placeholder="Должность" value="${this._state.jobTitle}">
                      <input id="f12-email-input" type="text" class="workspace__input-el" name="email" placeholder="E-mail" value="${this._state.email}">
                      <input id="f12-comment-input" type="text" class="workspace__input-el" name="comment" placeholder="Комментарий" value="${this._state.comment}">
                      

                      <label class="workspace__label" for="f12-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f12-lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}" disabled>
                      </label>

                    </form>`;
  }


}