// View: Оплата как Физ. лицо
class View11 extends View {
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

        
<textarea class="workspace__info workspace__info_size_300" disabled>В таком случае, мне понадобятся только ваши ФИО и логин на Яндексе. Продиктуйте, пожалуйста. Записал/
Я подготовлю ссылку для оплаты и отправлю ее на Вашу почту. На какую почту могу написать? Ссылка придет в течение 10 минут.
А пока давайте резюмируем наш диалог: Ваша компания ${this._state.company}, с видом деятельности ${this._state.branch}, предоставляет услуги по адресу ${this._state.address}, будет продвигаться с помощью Рекламной подписки на Яндекс / Рекламного размещения на Яндекс Картах, все верно?

${this._state.lpr}, когда ждать поступления?

Через 5-7 дней после старта рекламной кампании с Вами свяжется наш аккаунт-менеджер. Он будет помогать Вам на всем периоде размещения по Рекламной Подписке.
</textarea>
      
      <div class="workspace__section">
        <label class="workspace__label">
          Стоимость
          <input id="price-input" type="number" class="workspace__input-el" value="${this._state.price}" >
        </label>

        <label class="workspace__label">
          ID Заказа
          <input id="order-input" type="text" class="workspace__input-el" value="${this._state.order}" >
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
        Ссылка на личный кабинет
        <a href="${this._state.lkLink}" class="workspace__input-el" target="_blank">${this._state.lkLink}</a>
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

    this._callResultHandler('#CRPB-01', 'get_paid');
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