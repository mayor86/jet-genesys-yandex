// View: Стартовая страница
class View01 extends View {
  constructor(handler, state) {
    super(handler, state);

    this._state = state;
    this._status = this._state.status;
    this._answers = 
      `${this._state.q1}
      ${this._state.q2}
      ${this._state.q3}
      ${this._state.q4}
      ${this._state.q5}`;
    this._workspaceElement =
      `<form class="workspace__container" name="f1" novalidate>
      <div class="workspace__client-profile workspace__client-profile_opened">
        <div class="workspace__section">
          <label class="workspace__label" for="phone-input">
            Номер для набора
            <input id="phone-input" type="text" class="workspace__input-el workspace__input-el_s" name="phone" value="${this._state.numberToDial}" >
          </label>
          <label class="workspace__label" for="company-input">
            Название компании
            <input id="company-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="company" value="${this._state.company}" disabled >
          </label>
          <label class="workspace__label" for="lpr-input">
            Имя ЛПР
            <input id="lpr-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="lpr" value="${this._state.lpr}" disabled >
          </label>
          <label class="workspace__label" for="status-input">
            Статус
            <input id="status-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="status" value="${this._status}" disabled>
          </label>
        </div>
        <div class="workspace__section">
          <label class="workspace__label" for="branch-input">
            Отрасль
            <input id="branch-input" type="text" class="workspace__input-el workspace__input-el_m workspace__input-el_ro" name="branch" value="${this._state.branch}" disabled>
          </label>
          <label class="workspace__label" for="address-input">
            Адрес
            <input id="address-input" type="text" class="workspace__input-el workspace__input-el_m workspace__input-el_ro" name="address workspace__input-el_ro" value="${this._state.address}" disabled>
          </label>
        </div>
      </div>
      <div class="workspace__label">
        Комментарий
        <textarea id="comment-input" type="text" class="workspace__input-el workspace__input-el_comment workspace__input-el_ro" name="comment" value="${this._state.comment}" disabled></textarea>
      </div>
      <div class="workspace__section-questions">
        Ответы на вопросы
        <div class="workspace__question" >
          Как вы сейчас продвигаете свою кампанию через наши сервисы?
          <textarea type="text" class="workspace__answer workspace__input-el_ro" disabled="true">${this._state.q1}</textarea>
        </div>

        <div class="workspace__question" >
          Как вы сейчас продвигаете свою кампанию через наши сервисы?
          <textarea type="text" class="workspace__answer workspace__input-el_ro" disabled="true">${this._state.q2}</textarea>
        </div>

        <div class="workspace__question" >
          Как вы сейчас продвигаете свою кампанию через наши сервисы?
          <textarea type="text" class="workspace__answer workspace__input-el_ro" disabled="true">${this._state.q3}</textarea>
        </div>
        
        <div class="workspace__question" >
          Как вы сейчас продвигаете свою кампанию через наши сервисы?
          <textarea type="text" class="workspace__answer workspace__input-el_ro" disabled="true">${this._state.q4}</textarea>
        </div>

        <div class="workspace__question" >
          Как вы сейчас продвигаете свою кампанию через наши сервисы?
          <textarea type="text" class="workspace__answer workspace__input-el_ro" disabled="true">${this._state.q5}</textarea>
        </div>

      </div>
      <div class="workspace__label workspace__label_lk" >
        Ссылка на личный кабинет
        <a href="${this._state.lkLink}" class="workspace__input-el" target="_blank">${this._state.lkLink}</a>
      </div>
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container">
        <button id="FPB-01" class="button footer-panel__button button_yellow" type="button" onclick="${this._getNavigationPanelButtonForFPB01()}.click()">Скрипт</button>
        <button id="FPB-02" class="button button_red footer-panel__button" type="button" onclick="document.querySelector('#NPB-09').click()">Закрыто и не реализовано</button>
        <button id="FPB-03" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-09').click()">Успешно реализовано</button>
       </section>`;

    this._callResultPanelElement =
      `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-busy.png" />Занято</button>
      <button id="CRPB-02" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-no-answer.png" />Не отвечает</button>
      <button id="CRPB-03" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-wrong-number.png" />Неправильный номер</button>
      <button id="CRPB-04" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>`;
  }

  _getNavigationPanelButtonForFPB01() {
    if (this._status === 'Отправить счет') {
      //  if ('ПРИЗНАК ОЖИДАЕМ РЕКВИЗИТ' === 'Y') {
      //    return `document.querySelector('#NPB-08')`
      //  }
      return `document.querySelector('#NPB-03')`
    }

    return `document.querySelector('#NPB-02')`;
  }

  setEventListeners() {
    this._callResultHandler('#CRPB-01', 'Busy');
    this._callResultHandler('#CRPB-02', 'No Answer');
    this._callResultHandler('#CRPB-03', 'Wrong Party');
    this._callBackButtonHandler('#CRPB-04');
  }
}