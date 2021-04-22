// View: Связь с представителем
class View02 extends View {
  constructor(handler, state) {
    super(handler);

    
    this._state = state;
    this._workspaceElement = 
      `<form class="workspace__container" name="f2" novalidate>
        <button id="client-info-button" class="button" type="button">Информация о компании</button>
        <div class="workspace__client-info">
          <label class="workspace__label" for="lpr-input">
        Имя ЛПР
        <input id="lpr-input" type="text" class="workspace__input-el" name="lpr" value="${this._state.lpr}" disabled >
      </label>
      <label class="workspace__label" for="status-input">
        Статус
        <input id="status-input" type="text" class="workspace__input-el" name="status" value="${this._status}" disabled>
      </label>
      <label class="workspace__label" for="branch-input">
        Отрасль
        <input id="branch-input" type="text" class="workspace__input-el" name="branch" value="${this._state.branch}" disabled>
      </label>
      <label class="workspace__label" for="comment-input">
        Комментарий
        <input id="comment-input" type="text" class="workspace__input-el" name="comment" value="${this._state.comment}" disabled>
      </label>
      <label class="workspace__label" for="address-input">
        Адрес
        <input id="address-input" type="text" class="workspace__input-el" name="address" value="${this._state.address}" disabled>
      </label>

      </div>
        <label class="workspace__label" for="lk-link-input">
          Ссылка на личный кабинет
          <input id="lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}"  disabled >
        </label>
        
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container">
        <button id="FPB-01" class="button footer-panel__button button_yellow" type="button">Назад</button>
        <button id="FPB-02" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-03').click()">Связь с ЛПР</button>
       </section>`;

    this._callResultPanelElement = `<button id="CRPB-04" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>`;
  }

  setEventListeners() {
    this._clientInfoHandler('#client-info-button');
    this._backButtonHandler('#FPB-01');
  }

}