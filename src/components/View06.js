// View: Презентация Рекламы в Яндекс.Картах
class View06 extends View {
  constructor(handler, state) {
    super(handler);

    this._state = state;
    this._adapt_text = this._state.sentInvoiceFlag === 'Yes' ? `По стоимости есть несколько вариантов на 180 дней , он будет стоить _____ рублей, это со скидкой 12.5 %, и вариант на 360 дней, он стоит ____ рублей , со скидкой 25 %. Какой вариант для Вас оптимальнее?` : `По цене, самый выгодный вариант на год . Он стоит ____ руб. Как вам такой вариант?`;
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

<textarea class="workspace__info workspace__info_size_300" disabled >Хочу рассказать Вам про возможности рекламного формата на Яндекс Картах, с помощью которого:

Во первых, ваша компания будет показана на верхних позициях поисковой выдачи в Яндекс Картах и в мобильном приложении при рубричных запросах. Эти позиции собирают наибольшее количество внимания теплых и близких клиентов. Они уже ищут где купить ваш товар получить услугу и смогут быстро до вас дойти/доехать

Во вторых, ваша компания будет отмечена не обычной синей, а заметной большой зеленой меткой. Такие метки кликают намного чаще. Соответственно, и шансы того, что клиент выберет именно вашу компанию , существенно растут.

И в третьих , сможете больше информации о себе заполнить, акции, витрину товаров и услуг, что привлечёт больше целевых клиентов, которые уже ознакомились с Вашими предложениями и расценками.</textarea>
      <textarea class="workspace__info" disabled>${this._adapt_text}</textarea>
      
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
        <button id="FPB-04" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-09').click()">Подумаю</button>
        <button id="FPB-05" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-10').click()">Согласен</button>
       </section>`;

    this._callResultPanelElement = `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>`;
  }


  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._callBackButtonHandler('#CRPB-01');
  }

}