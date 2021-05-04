// View: Выход на ЛПР
class View03 extends View {
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

<textarea class="workspace__info workspace__info_size_100" disabled>Добрый день . Меня зовут ______, я из компании Яндекс . Как я могу к Вам обращаться? ${this._state.lpr}, я верно понимаю, что вы являетесь руководителем компании? ${this._state.lpr}, очень приятно с Вами познакомиться, я являюсь Вашим персональным менеджером, с вопросами по размещению Вашей компании на Картах/в Справочнике - можете обращаться ко мне. Также хотелось бы задать Вам несколько вопросов касающихся Вашего бизнеса, будет сейчас 2-3 минуты для разговора?</textarea>
        
        <div class="workspace__section">
            <label class="workspace__label">
              Имя ЛПР
              <input id="lpr-input" type="text" class="workspace__input-el workspace__input-el_s" value="${this._state.lpr}" >
            </label>

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
              <input id="email-input" type="text" class="workspace__input-el workspace__input-el_s" value="${this._state.email}" >
            </label>
          </div>
          <div class="workspace__section">

        <div class="workspace__label">
          Комментарий
          <textarea id="comment-input" type="text" class="workspace__input-el workspace__input-el_comment">${this._state.comment}</textarea>
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
        <button id="FPB-02" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-08').click()">Категоричный отказ</button>
        <button id="FPB-03" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-07').click()">Возражение</button>
        <button id="FPB-04" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-04').click()">Не ознакомился</button>
        <button id="FPB-05" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-10').click()">Согласен</button>
       </section>`;

    this._callResultPanelElement = 
      `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-lpr.png" />Вышли на ЛПР</button>
       <button id="CRPB-02" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>
       <div class="call-result-panel__error"></div>`;
  }

  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._callBackButtonHandler('#CRPB-02');
    this._changeFieldValueHandler('#lpr-input', 'lpr');
    this._changeFieldValueHandler('#jobTitle-input', 'jobTitle');
    this._changeFieldValueHandler('#phone-input', 'phone');
    this._changeFieldValueHandler('#email-input', 'email');
    this._changeFieldValueHandler('#comment-input', 'comment');
  }

}