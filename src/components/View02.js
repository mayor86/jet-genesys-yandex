// View: Связь с представителем
class View02 extends View {
  constructor(handler, state) {
    super(handler, state);

    this._state = state;
    this._workspaceElement = 
      `<form class="workspace__container" name="f1" novalidate>
        <div class="workspace__client-info">
          <div>
            <img src="./images/info.png" />
            Информация о компании
          </div>
          <button type="button" class="workspace__client-info-button">
            <img class="workspace__client-info-image" />
          </button>
        </div>
        <div class="workspace__client-profile">
          <div class="workspace__section">
            <label class="workspace__label" for="company-input">
              Название компании
              <input id="company-input" type="text" class="workspace__input-el workspace__input-el_s" name="company" value="${this._state.company}" disabled >
            </label>
            <label class="workspace__label" for="lpr-input">
              Имя ЛПР
              <input id="lpr-input" type="text" class="workspace__input-el workspace__input-el_s" name="lpr" value="${this._state.lpr}" disabled >
            </label>
            <label class="workspace__label" for="status-input">
              Статус
              <input id="status-input" type="text" class="workspace__input-el workspace__input-el_s" name="status" value="${this._status}" disabled>
            </label>
          </div>
          <div class="workspace__section">
            <label class="workspace__label" for="branch-input">
              Отрасль
              <input id="branch-input" type="text" class="workspace__input-el workspace__input-el_m" name="branch" value="${this._state.branch}" disabled>
            </label>
            <label class="workspace__label" for="address-input">
              Адрес
              <input id="address-input" type="text" class="workspace__input-el workspace__input-el_m" name="address" value="${this._state.address}" disabled>
            </label>
          </div>
        </div>

        <textarea class="workspace__info workspace__info_size_25" disabled>Здравствуйте. Это [Имя] из компании Яндекс. Соедините, пожалуйста, с директором или маркетологом.</textarea>

        <div class="workspace__info_label">Если спросили про причину
          <textarea class="workspace__info workspace__info_size_200" disabled>Пример 1. Я звоню..

Пример 2. Я звоню по вопросу...</textarea>
        </div>
          
        
      </div>
      <div class="workspace__label workspace__label_lk" >
      Ссылка на личный кабинет
      <a href="${this._state.lkLink}" class="workspace__input-el" target="_blank">${this._state.lkLink}</a>
    </div>
        
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container">
        <button id="FPB-01" class="button footer-panel__button button_yellow" type="button">Назад</button>
        <button id="FPB-02" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-03').click()">Связь с ЛПР</button>
       </section>`;

    this._callResultPanelElement = `<button id="CRPB-04" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>`;
  }

  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
  }

}