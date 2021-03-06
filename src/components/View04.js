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
              <input type="text" class="workspace__input-el workspace__input-el_ro workspace__input-el_last-el" name="status" value="${this._state.status}" disabled>
            </label>
          </div>
          <div class="workspace__section">
            <label class="workspace__label">
              Отрасль
              <input type="text" class="workspace__input-el workspace__input-el_ro" name="branch" value="${this._state.branch}" disabled>
            </label>
            <label class="workspace__label">
              Адрес
              <input type="text" class="workspace__input-el workspace__input-el_ro workspace__input-el_last-el" name="address" value="${this._state.address}" disabled>
            </label>
          </div>
        </div>
        
        <div class="workspace__section-questions">
          Вопросы
          <div class="workspace__question" >
            1. Как вы сейчас продвигаете свою кампанию через наши сервисы?
<textarea class="workspace__info workspace__info_size_50" disabled>(Директ, РСЯ, Яндекс.Услуги? Что понравилось в рекламном инструменте Директа? Какой бюджет сейчас тратите на эту рекламу? А эта сумма с учетом затрат на маркетолога)</textarea>
            <textarea id="q1" type="text" class="workspace__answer workspace__answer_opened workspace__input-el_w" >${this._state.q1}</textarea>
          </div>

          <div class="workspace__question" >
            2. Кто управляет и настраивает рекламные кампании?
            <textarea id="q2" type="text" class="workspace__answer workspace__answer_opened workspace__input-el_w" >${this._state.q2}</textarea>
          </div>

          <div class="workspace__question" >
            3. Как именно хотите получать клиентов: звонки, заявки, записи?
            <textarea id="q3" type="text" class="workspace__answer workspace__answer_opened workspace__input-el_w" >${this._state.q3}</textarea>
          </div>
          
          <div class="workspace__question" >
            4. Какой бюджет примерно выделяете на продвижение в месяц?
            <textarea id="q4" type="text" class="workspace__answer workspace__answer_opened workspace__input-el_w" >${this._state.q4}</textarea>
          </div>

          <div class="workspace__question" >
            5. Что для вас самое важное в рекламе?
            <textarea id="q5" type="text" class="workspace__answer workspace__answer_opened workspace__input-el_w" >${this._state.q5}</textarea>
          </div>

      </div>

<textarea class="workspace__info workspace__info_size_100" disabled>${this._state.lpr}, если я правильно Вас понял, то Вы (кратко перечисляем то, что сказал клиент).

Например: продвигаетесь только через Директ в Поиске, не увидели ожидаемого результата, настраивать рекламную кампанию помогал ваш сотрудник, и без учета его работы вы тратите до 15000 в месяц. Все так?</textarea>

      <div class="workspace__info_label workspace__info_prompt"><img src="./images/prompt.png">Подсказка
<textarea class="workspace__info workspace__info_prompt-subtitle workspace__info_size_75" disabled>Если клиент не пользуется Директом или бюджет на рекламу превышает макс. трафик на 5000 рублей - предлагаем Подписку.

Если клиент уже пользуется Директом и бюджет на рекламу превышает макс. трафик на 5000 рублей - предлагаем рекламу в Яндекс.Картах</textarea>
        </div>
        <div class="workspace__section-radio">
          <div>
            <input type="radio" id="subscription-radio" name="product" value="subscription">
            <label class="workspace__radio-item" for="subscription-radio">Рекламная подписка</label>
          </div>
          <div>
            <input type="radio" id="maps-radio" name="product" value="maps">
            <label class="workspace__radio-item" for="maps-radio">Реклама в Яндекс. Картах</label>
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
        <button id="FPB-01" class="button footer-panel__button button_yellow" type="button">Назад</button>
       </section>`;

    this._callResultPanelElement =
      `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>
      <div class="call-result-panel__error"></div>`;
  }

  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._callBackButtonHandler('#CRPB-01', 'Scheduled');
    this._changeFieldValueHandler('#q1', 'q1');
    this._changeFieldValueHandler('#q2', 'q2');
    this._changeFieldValueHandler('#q3', 'q3');
    this._changeFieldValueHandler('#q4', 'q4');
    this._changeFieldValueHandler('#q5', 'q5');

    const mapsRadio = document.querySelector('#maps-radio');
    const subscriptionRadio = document.querySelector('#subscription-radio');

    mapsRadio.addEventListener('change', (evt) => {
      this._setStateItemHandler('chosenProduct', 'maps');
    })

    subscriptionRadio.addEventListener('change', (evt) => {
      this._setStateItemHandler('chosenProduct', 'Subscription');
    })

    this._checkProduct();
  }

  _checkProduct() {
    const mapsRadio = document.querySelector('#maps-radio');
    const subscriptionRadio = document.querySelector('#subscription-radio');
    if (this._state.chosenProduct === 'Subscription') {
      subscriptionRadio.setAttribute('checked', true);
    } else if (this._state.chosenProduct === 'maps') {
      mapsRadio.setAttribute('checked', true);
    } else {

    }
  }
}