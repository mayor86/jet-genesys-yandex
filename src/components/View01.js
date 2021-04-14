import View from './View.js';

export default class View01 extends View {
  constructor(state) {
    super();

    
    this._state = state;
    this._workspaceElement =
      `<form class="workspace__container" name="f1" novalidate>
      <label class="workspace__label" for="f1-phone-input">
        Номер для набора
        <input id="f1-phone-input" type="text" class="workspace__input-el" name="phone" value="${this._state.phone}" disabled >
      </label>
      <label class="workspace__label" for="f1-company-input">
        Название компании
        <input id="f1-company-input" type="text" class="workspace__input-el" name="company" value="${this._state.company}" >
      </label>
      <label class="workspace__label" for="f1-lpr-input">
        Имя ЛПР
        <input id="f1-lpr-input" type="text" class="workspace__input-el" name="lpr" value="${this._state.lpr}" >
      </label>
      <label class="workspace__label" for="f1-status-input">
        Статус
        <input id="f1-status-input" type="text" class="workspace__input-el" name="status" value="${this._state.status}" >
      </label>
      <label class="workspace__label" for="f1-branch-input">
        Отрасль
        <input id="f1-branch-input" type="text" class="workspace__input-el" name="branch" value="${this._state.branch}" >
      </label>
      <label class="workspace__label" for="f1-comment-input">
        Комментарий
        <input id="f1-comment-input" type="text" class="workspace__input-el" name="comment" value="${this._state.comment}" >
      </label>
      <label class="workspace__label" for="f1-address-input">
        Адрес
        <input id="f1-address-input" type="text" class="workspace__input-el" name="address" value="${this._state.address}" >
      </label>
      <label class="workspace__label" for="f1-answers-input" >
        Ответы на вопросы
        <input id="f1-answers-input" type="text" class="workspace__input-el" name="answers" >
      </label>
      <label class="workspace__label" for="f1-lk-link-input">
        Ссылка на личный кабинет
        <input id="f1-lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}"  disabled >
      </label>
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container" name="view01">
        <button id="FPB-01" class="button footer-panel__button" type="button" onclick="console.log('Нажали скрипт!')">Скрипт</button>
        <button id="FPB-02" class="button footer-panel__button" type="button">Закрыто и не реализовано</button>
        <button id="FPB-03" class="button footer-panel__button" type="button">Успешно реализовано</button>
       </section>`;

    this._callResultPanelElement =
      `<button id="CRPB-01" class="button call-result-panel__button" type="button">Занято</button>
      <button id="CRPB-02" class="button call-result-panel__button" type="button">Не отвечает</button>
      <button id="CRPB-03" class="button call-result-panel__button" type="button">Неправильный номер</button>
      <button id="CRPB-04" class="button call-result-panel__button" type="button">Перезвонить</button>`;
  }

  // generateView() {
  //    this._removeItem(this._workspace);
  //    this._removeItem(this._footerPanel);
  //    this._removeItem(this._callResultPanel);
  //    this._addHTMLItem(this._workspace, this._generateWorkspace());
  //    this._addHTMLItem(this._footerPanel, this._generateFooterPanel());
  //    this._addHTMLItem(this._callResultPanel, this._generateCallResultPanel());
  //    this._setEventListeners();
  //  }

  generateWorkspace() {
    return this._workspaceElement;
  }

  generateFooterPanel() {
    return this._footerPanelElement;
  }

  generateCallResultPanel() {
    return this._callResultPanelElement;
  }

  _setEventListeners() {

  }

  _addHTMLItem(container, html) {
    container.insertAdjacentHTML('afterbegin', html);
  }

  _removeItem(container) {
    container.innerHTML = '';
  }
}