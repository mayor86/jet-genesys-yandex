// View: Оплата как Юр. лицо (предоставил реквизиты)
class View13 extends View {
  constructor(handler, state) {
    super(handler);

    this._state = state;
    this._adaptText = this._state.chosenProduct === 'Subscription' ? `А сейчас давайте резюмируем наш диалог: Ваша компания ${this._state.company}, с видом деятельности ${this._state.branch}, предоставляет услуги по адресу ${this._state.address}, будет продвигаться с помощью Рекламной подписки на Яндекс, все верно?
Счет направлю Вам в течение 5 минут. Подскажите, Вам когда удобнее оплатить: сегодня или завтра?
Через 5-7 дней после старта рекламной кампании с Вами свяжется наш аккаунт-менеджер. Он будет помогать Вам на всем периоде размещения.` : this._state.chosenProduct === 'maps' ? `А сейчас давайте резюмируем наш диалог: Ваша компания ${this._state.company}, с видом деятельности ${this._state.branch}, предоставляет услуги по адресу ${this._state.address}, будет продвигаться с помощью Рекламного размещения на Яндекс.Картах, все верно? 
Счет направлю Вам в течение 5 минут. Подскажите, Вам когда удобнее оплатить: сегодня или завтра?
Через 5-7 дней после старта рекламной кампании с Вами свяжется наш аккаунт-менеджер. Он будет помогать Вам на всем периоде размещения.`
    : 
    `А сейчас давайте резюмируем наш диалог: Ваша компания ${this._state.company}, с видом деятельности ${this._state.branch}, предоставляет услуги по адресу ${this._state.address}, будет продвигаться с помощью Рекламной подписки на Яндекс / Рекламного размещения на Яндекс.Картах, все верно?
Счет направлю Вам в течение 5 минут. Подскажите, Вам когда удобнее оплатить: сегодня или завтра?
Через 5-7 дней после старта рекламной кампании с Вами свяжется наш аккаунт-менеджер. Он будет помогать Вам на всем периоде размещения`;
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
        
<textarea class="workspace__info workspace__info_size_150" disabled>${this._adaptText}</textarea>
              
              <div class="workspace__section">
                <label class="workspace__label">
                  Стоимость
                  <input id="price-input" type="number" class="workspace__input-el" value="${this._state.price}" >
                </label>
        
                <label class="workspace__label">
                  ID Заказа
                  <input id="order-input" type="text" class="workspace__input-el" value="${this._state.flight}" >
                </label>
        
                <label class="workspace__label">
                  Период размещения
                  <input id="period-input" type="text" class="workspace__input-el workspace__input-el_last-el" value="${this._state.period}" >
                </label>
              </div>
        
              <div class="workspace__section">
                <label class="workspace__label">
                  Логин
                  <input id="login-input" type="text" class="workspace__input-el" value="${this._state.login}" >
                </label>
        
                <label class="workspace__label">
                  Ожидаемая дата оплаты
                  <input id="expectedPayDate-input" type="date" class="workspace__input-el workspace__input-el_last-el" value="${this._state.expectedPayDate}" >
                </label>
              </div>
              
              <div class="workspace__label">
                  Комментарий
                  <textarea id="comment-input" type="text" class="workspace__input-el workspace__input-el_comment workspace__input-el_last-el" name="comment" value="${this._state.comment}" ></textarea>
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

    this._callResultPanelElement = `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-get-pay.png" />Получить оплату</button>
    <div class="call-result-panel__error"></div>`;
  }

  setEventListeners() {
    document.querySelector('#CRPB-01').addEventListener('click', () => {
      this._setStateItemHandler('status', 'Получить оплату');
    });

    this._callBackButtonHandler('#CRPB-01', 'get_paid');
    
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._changeFieldValueHandler('#price-input', 'price');
    this._changeFieldValueHandler('#order-input', 'order');
    this._changeFieldValueHandler('#period-input', 'period');
    this._changeFieldValueHandler('#login-input', 'login');
    this._changeFieldValueHandler('#expectedPayDate-input', 'expectedPayDate');
    this._changeFieldValueHandler('#comment-input', 'comment');
  }


}