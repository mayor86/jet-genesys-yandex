import View from './View.js';

export default class View02 extends View {
  constructor(state) {
    super();

    
    this._state = state;
    this._workspaceElement = 
      `<form class="workspace__container" name="f2" novalidate>
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
      <label class="workspace__label" for="f1-lk-link-input">
        Ссылка на личный кабинет
        <input id="f1-lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}"  disabled >
      </label>
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container" name="view02">
        <button id="FPB-01" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-01').click()">Скрипт</button>
        <button id="FPB-02" class="button footer-panel__button" type="button">Закрыто и не реализовано</button>
        
       </section>`;

    this._callResultPanelElement =
      `<button id="CRPB-01" class="button call-result-panel__button" type="button">Занято</button>
      <button id="CRPB-02" class="button call-result-panel__button" type="button">Не отвечает</button>
      <button id="CRPB-03" class="button call-result-panel__button" type="button">Неправильный номер</button>
      `;
  }

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