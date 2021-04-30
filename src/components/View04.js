// View: Выявление потребности
class View04 extends View {
  constructor(handler, state) {
    super(handler);

    
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
            <label class="workspace__label">
              Название компании
              <input type="text" class="workspace__input-el workspace__input-el_ro" value="${this._state.company}" disabled >
            </label>
            <label class="workspace__label">
              Имя ЛПР
              <input type="text" class="workspace__input-el workspace__input-el_ro" name="lpr" value="${this._state.lpr}" disabled >
            </label>
            <label class="workspace__label">
              Статус
              <input type="text" class="workspace__input-el workspace__input-el_ro" name="status" value="${this._state.status}" disabled>
            </label>
          </div>
          <div class="workspace__section">
            <label class="workspace__label">
              Отрасль
              <input type="text" class="workspace__input-el workspace__input-el_ro" name="branch" value="${this._state.branch}" disabled>
            </label>
            <label class="workspace__label">
              Адрес
              <input type="text" class="workspace__input-el workspace__input-el_ro" name="address" value="${this._state.address}" disabled>
            </label>
          </div>
        </div>
        
        <div class="workspace__section-questions">
          Вопросы
          <div class="workspace__question" >
            Как вы сейчас продвигаете свою кампанию через наши сервисы?
            <textarea id="q1" type="text" class="workspace__answer" >${this._state.q1}</textarea>
          </div>

          <div class="workspace__question" >
            Как вы сейчас продвигаете свою кампанию через наши сервисы?
            <textarea id="q2" type="text" class="workspace__answer" >${this._state.q2}</textarea>
          </div>

          <div class="workspace__question" >
            Как вы сейчас продвигаете свою кампанию через наши сервисы?
            <textarea id="q3" type="text" class="workspace__answer" >${this._state.q3}</textarea>
          </div>
          
          <div class="workspace__question" >
            Как вы сейчас продвигаете свою кампанию через наши сервисы?
            <textarea id="q4" type="text" class="workspace__answer" >${this._state.q4}</textarea>
          </div>

          <div class="workspace__question" >
            Как вы сейчас продвигаете свою кампанию через наши сервисы?
            <textarea id="q5" type="text" class="workspace__answer" >${this._state.q5}</textarea>
          </div>

      </div>

      <div class="workspace__info_label workspace__info_prompt"><img src="./images/prompt.png">Подсказка
          <textarea class="workspace__info workspace__info_prompt" >Если клиент не пользуется..</textarea>
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
       </section>`;

    this._callResultPanelElement = 
      `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>`;
  }

  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._callBackButtonHandler('#CRPB-01');
    this._changeFieldValueHandler('#q1', 'q1');
    this._changeFieldValueHandler('#q2', 'q2');
    this._changeFieldValueHandler('#q3', 'q3');
    this._changeFieldValueHandler('#q4', 'q4');
    this._changeFieldValueHandler('#q5', 'q5');
  }
}