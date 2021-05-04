// View: Оплата как Юр. лицо (не предоставил реквизиты)
class View12 extends View {
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

<textarea class="workspace__info workspace__info_size_200" disabled>В таком случае, я отправлю письмо на Вашу почту, в ответ на которое нужно
будет прислать реквизиты. На какую почту могу написать? Сейчас отправлю письмо на данную почту. ${this._state.lpr}, проверьте, пожалуйста, мое письмо доставлено?
А пока давайте резюмируем наш диалог: Ваша компания ${this._state.company}, с видом деятельности ${this._state.branch}, предоставляет услуги по адресу ${this._state.address}, будет продвигаться с помощью Рекламной подписки на Яндекс / Рекламного размещения на Яндекс Картах, все верно?
Отлично, сегодня до какого времени сможете отправить реквизиты?</textarea>

        <div class="workspace__section">
            <label class="workspace__label">
              Дата первого звонка
              <input id="firstCallDate-input" type="date" class="workspace__input-el workspace__input-el_s" value="${this._state.firstCallDate}" >
            </label>

            <label class="workspace__label">
              Дата отправки КП
              <input id="kpDate-input" type="date" class="workspace__input-el workspace__input-el_s" value="${this._state.kpDate}" >
            </label>
            
            <label class="workspace__label">
              Имя ЛПР
              <input id="lpr-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_last-el" value="${this._state.lpr}" >
            </label>
        </div>
        
        <div class="workspace__section">
          <label class="workspace__label">
            Должность
            <input id="jobTitle-input" type="text" class="workspace__input-el workspace__input-el_s" value="${this._state.jobTitle}" >
          </label>

            <label class="workspace__label">
              Телефон
              <input id="phone-input" type="text" class="workspace__input-el workspace__input-el_s" value="${this._state.phone}" >
            </label>
            
            <label class="workspace__label">
              E-mail
              <input id="email-input" type="text" class="workspace__input-el workspace__input-el_s workspace__input-el_last-el" value="${this._state.email}" >
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

    this._callResultPanelElement = `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-waiting-for-invoice.png" />Ожидаем реквизиты</button>
    <div class="call-result-panel__error"></div>`;
  }

  setEventListeners() {
    document.querySelector('#CRPB-01').addEventListener('click', () => {
      this._setStateItemHandler('status', 'Получить оплату');
    });

    this._callResultHandler('#CRPB-01', 'get_paid');
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._changeFieldValueHandler('#firstCallDate-input', 'firstCallDate');
    this._changeFieldValueHandler('#kpDate-input', 'kpDate');
    this._changeFieldValueHandler('#lpr-input', 'lpr');
    this._changeFieldValueHandler('#jobTitle-input', 'jobTitle');
    this._changeFieldValueHandler('#phone-input', 'phone');
    this._changeFieldValueHandler('#email-input', 'email');
    this._changeFieldValueHandler('#comment-input', 'comment');
  }


}