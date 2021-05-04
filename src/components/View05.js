// View: Презентация подписки 
class View05 extends View {
  constructor(handler, state) {
    super(handler);

    this._state = state;
    this._adapt_text = this._state.sentInvoiceFlag === 'Yes' ? `По стоимости есть несколько вариантов по оптимальному бюджету: на 180 дней Рекламной подписки , он будет стоить _____ рублей, это со скидкой 12.5%, и вариант на 360 дней , он стоит ____ рублей , со скидкой 25%. Какой вариант для Вас оптимальнее?` : `По стоимости есть выгодный вариант на 360 дней Рекламной подписки, он будет со скидкой 25 %. Туда включены сразу несколько масштабных площадок: основной Поиск Яндекса, рекламная сеть , а также Карты и Услуги. Этот вариант стоит __.
    Как Вам такой вариант?`;
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

<text class="workspace__info_text-style_title workspace__info_text-style_left" disabled>${this._state.lpr}, хочу рассказать про возможности Рекламной подписки на Яндекс, которая:</text>
<text class="workspace__info_text-style_subtitle workspace__info_text-style_left" disabled>Во-первых:</text>
<text class="workspace__info_text-style_highlight workspace__info_text-style_left">Эффективность:</text>
<textarea class="workspace__info workspace__info_size_150" disabled>
Рекламная подписка приводит вам только целевых клиентов с Яндекс Поиска и РСЯ это сайты партнеры , их более 40 тысяч , и там также есть Ваша аудитория. Мы покажем ваши объявления только заинтересованным покупателям . После того , как клиент перейдет по объявлению, он попадет на Вашу карточку в Яндекс Картах. Это очень удобно, карточка быстро открывается и клиент сможет увидеть подробную информацию о Вашем предложении: акции и актуальные товары и услуги. В карточке будет большая и заметная кнопка действия в самом верху, по которой Ваши клиенты одним нажатием будут связываться с Вами удобным для Вас способом.
</textarea>
<text class="workspace__info_text-style_subtitle workspace__info_text-style_left" disabled>Во-вторых:</text>
<text class="workspace__info_text-style_highlight workspace__info_text-style_left">Простота настройки:</text>
<textarea class="workspace__info workspace__info_size_120" disabled>
Выбрать кнопку действия и добавить информацию о своих товарах это все , что потребуется от Вас в плане настройки. Дальше все объявления создает наш алгоритм . Вам не придется выбирать ключевые слова и следить за трендами в Вашей отрасли. Алгоритм самообучаемый и показывает рекламу по самым целевым запросам. В итоге, Вам не нужно как то дополнительно обучаться, тратить свое время или деньги на маркетолога, всем займется наш алгоритм.
</textarea>
<text class="workspace__info_text-style_highlight workspace__info_text-style_left">Защита от скликивания:</text>
<textarea class="workspace__info workspace__info_size_100" disabled>
За бюджет переживать не нужно, его невозможно скликать или как то потратить за 1 день. Мы распределим его на весь срок рекламной кампании и Вы будете стабильно получать целевые обращения от клиентов. Рекламный алгоритм настроен так, чтобы получить максимум целевых клиентов на Ваш бюджет. Это звонки, и переходы по кнопке действия. Именно это вы и получите, а не просто клики.
</textarea>
<text class="workspace__info_text-style_highlight workspace__info_text-style_left">Прозрачная статистика:</text>
<textarea class="workspace__info workspace__info_size_120" disabled>
Вся статистика по рекламной кампании собирается в одном месте в Вашем личном кабинете. Наша статистика показывает только самые важные цифры сколько людей перешли в Вашу карточку и сколько совершили целевое действие. Не придется разбираться с множеством непонятных показателей.

Сориентировать Вас по стоимости?
</textarea>
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

    this._callResultPanelElement = `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>
    <div class="call-result-panel__error"></div>`;
  }


  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._callBackButtonHandler('#CRPB-01');
  }


}