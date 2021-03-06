// View: Стартовая страница
class View01 extends View {
  constructor(handler, state) {
    super(handler);

    this._state = state;
    this._status = this._state.status;
    this._workspaceElement =
      `<form class="workspace__container" name="f1" novalidate>
      <div class="workspace__client-profile workspace__client-profile_opened">
        <div class="workspace__section">
          <label class="workspace__label" for="phone-input">
            Номер для набора
            <select id="phone-input" class="workspace__input-el">
              <option selected value="${this._state.phone}">${this._state.numberToDial}</option>
            </select>
          </label>
          <label class="workspace__label" for="company-input">
            Название компании
            <input id="company-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="company" value="${this._state.company}" disabled >
          </label>
          
          <label class="workspace__label" for="status-input">
            Статус
            <input id="status-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="status" value="${this._status}" disabled>
          </label>
          <label class="workspace__label" for="last-call-input">
            Дата последнего звонка
            <input id="last-call-input" type="date" class="workspace__input-el workspace__input-el_s workspace__input-el_ro workspace__input-el_last-el" name="last-call" value="${this._state.lpr}" disabled >
          </label>
        </div>
        <div class="workspace__section">
          <label class="workspace__label" for="branch-input">
            Отрасль
            <input id="branch-input" type="text" class="workspace__input-el workspace__input-el_m workspace__input-el_ro" name="branch" value="${this._state.branch}" disabled>
          </label>
          <label class="workspace__label" for="lpr-input">
            Имя ЛПР
            <input id="lpr-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="lpr" value="${this._state.lpr}" disabled >
          </label>
          <label class="workspace__label" for="manager-input">
            Менеджер
            <input id="manager-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_ro" name="manager" value="${this._state.lpr}" disabled >
          </label>
          <label class="workspace__label" for="address-input">
            Адрес
            <input id="address-input" type="text" class="workspace__input-el workspace__input-el_m workspace__input-el_ro workspace__input-el_last-el" name="address workspace__input-el_ro" value="${this._state.address}" disabled>
          </label>
        </div>

        <div class="workspace__section">
          <label class="workspace__label" for="address-input">
            Адрес
            <input id="address-input" type="text" class="workspace__input-el workspace__input-el_m workspace__input-el_ro workspace__input-el_last-el" name="address workspace__input-el_ro" value="${this._state.address}" disabled>
          </label>
        </div>
      </div>
      <div class="workspace__label">
        Комментарий
        <textarea id="comment-input" type="text" class="workspace__input-el workspace__input-el_comment workspace__input-el_ro workspace__input-el_last-el" disabled>${this._state.comment}</textarea>
      </div>
      <div class="workspace__section-questions">
        Ответы на вопросы
        <div class="workspace__question" >
          <div class="workspace__question-area">
            <img id="img-q1" class="workspace__question-image">
            1. Как вы сейчас продвигаете свою кампанию через наши сервисы?
          </div>
          <textarea id="q1" type="text" class="workspace__answer workspace__answer_opened" disabled="true">${this._state.q1}</textarea>
        </div>

        <div class="workspace__question" >
          <div class="workspace__question-area">
            <img id="img-q2" class="workspace__question-image">
            2. Кто управляет и настраивает рекламные кампании?
          </div>
          <textarea id="q2" type="text" class="workspace__answer workspace__answer_opened" disabled="true">${this._state.q2}</textarea>
        </div>

        <div class="workspace__question" >
          <div class="workspace__question-area">
            <img id="img-q3" class="workspace__question-image">
            3. Как именно хотите получать клиентов: звонки, заявки, записи?
          </div>
          <textarea id="q3" type="text" class="workspace__answer workspace__answer_opened" disabled="true">${this._state.q3}</textarea>
        </div>
        
        <div class="workspace__question" >
          <div class="workspace__question-area">
            <img id="img-q4" class="workspace__question-image">
            4. Какой бюджет примерно выделяете на продвижение в месяц?
          </div>
          <textarea id="q4" type="text" class="workspace__answer workspace__answer_opened" disabled="true">${this._state.q4}</textarea>
        </div>

        <div class="workspace__question" >
          <div class="workspace__question-area">
            <img id="img-q5" class="workspace__question-image">
            5. Что для вас самое важное в рекламе?
          </div>
          <textarea id="q5" type="text" class="workspace__answer workspace__answer_opened" disabled="true">${this._state.q5}</textarea>
        </div>

      </div>
      <div class="workspace__label workspace__label_lk" >
        Ссылки
        <a href="${this._state.lkLink}" class="workspace__input-el" target="_blank">Я.Справочник</a>
        <a href="${this._state.lkLink}" class="workspace__input-el" target="_blank">Я.Бизнес</a>
      </div>
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container">
        <button id="FPB-01" class="button footer-panel__button button_yellow" type="button" onclick="${this._getNavigationPanelButtonForFPB01()}.click()">Скрипт</button>
        <button id="FPB-02" class="button button_red footer-panel__button" type="button" onclick="document.querySelector('#NPB-08').click()">Закрыто и не реализовано</button>
        <button id="FPB-03" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-08').click()">Успешно реализовано</button>
       </section>`;

    this._callResultPanelElement = this._status !== 'Ожидаем реквизиты' ?
      `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-busy.png" />Занято</button>
      <button id="CRPB-02" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-no-answer.png" />Не отвечает</button>
      <button id="CRPB-03" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-wrong-number.png" />Неправильный номер</button>
      <button id="CRPB-04" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>
      <button id="CRPB-05" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Повторный набор</button>
      <div class="call-result-panel__error"></div>` :

      `<button id="CRPB-04" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>
      <button id="CRPB-05" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Повторный набор</button>
      <div class="call-result-panel__error"></div>`;
  }

  _getNavigationPanelButtonForFPB01() {
    if (this._status === 'Отправить счет') {
      return `document.querySelector('#NPB-03')`
    }

    return `document.querySelector('#NPB-02')`;
  }

  setEventListeners() {
    this._callResultHandler('#CRPB-01', 'Busy');
    this._callResultHandler('#CRPB-02', 'No Answer');
    this._callResultHandler('#CRPB-03', 'Wrong Party');
    this._callBackButtonHandler('#CRPB-04', 'Scheduled');

    document.querySelector('#img-q1').addEventListener('click', () => {
      document.querySelector('#q1').classList.toggle('workspace__answer_opened');
      document.querySelector('#img-q1').classList.toggle('workspace__question-image_closed');
    });

    document.querySelector('#img-q2').addEventListener('click', () => {
      document.querySelector('#q2').classList.toggle('workspace__answer_opened');
      document.querySelector('#img-q2').classList.toggle('workspace__question-image_closed');
    });

    document.querySelector('#img-q3').addEventListener('click', () => {
      document.querySelector('#q3').classList.toggle('workspace__answer_opened');
      document.querySelector('#img-q3').classList.toggle('workspace__question-image_closed');
    });

    document.querySelector('#img-q4').addEventListener('click', () => {
      document.querySelector('#q4').classList.toggle('workspace__answer_opened');
      document.querySelector('#img-q4').classList.toggle('workspace__question-image_closed');
    });

    document.querySelector('#img-q5').addEventListener('click', () => {
      document.querySelector('#q5').classList.toggle('workspace__answer_opened');
      document.querySelector('#img-q5').classList.toggle('workspace__question-image_closed');
    });

    this._placeHandler('#CRPB-05');

    this._setPhones();

    this._changeFieldValueHandler('#phone-input', 'numberToDial');
  }

  _setPhones() {
    const numberToDial = document.querySelector('#phone-input');
    const stateKeys = Object.keys(this._state);
    
    const phones = stateKeys.filter(item => {
      if (item.substr(0, 5) === 'phone') {
        return true
      }
    })
    console.log(phones);
    phones.forEach(phone => {
      numberToDial.add(new Option(this._state[phone], this._state[phone], false, false));
    });
  }
}