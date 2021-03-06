// View: Отработка возражений
class View07 extends View {
  constructor(handler, state) {
    super(handler);

    
    this._state = state;
    this._adapt_text = this._state.sentInvoiceFlag === 'Yes' ? `Для Вас есть еще возможность размещения на 90 дней по стоимости _____, и на 180 дней по стоимости ____ рублей. Какой вариант оптимален для Вас и Вашей компании?` : `Как смотрите на то , чтобы размещаться на год?`;
    this._alreadyUse = this._state.chosenProduct === 'Subscription' ? `Безусловно, это хороший рекламный инструмент. Он уже приводит к вам клиентов, которые (ищут в поиске/проезжают по дороге/идет в метро/пользуются 2гис).
Сейчас у Вас есть возможность привести к себе клиентов со всего Яндекса.
Представьте, что (описываем примерную картину, применимую к бизнесу клиента)…

Примеры: Ваш клиент едет в машине и ищет автомойку, ему проще и удобнее найти ее прямо в
навигаторе и построить маршрут; Ваш клиент едет в командировку и выбирает гостиницу, ему
важно, чтобы она была рядом с местом его работы. Он заходит на Карты и выбирает именно там.` : this._state.chosenProduct === 'maps' ? `Безусловно, это хороший рекламный инструмент. Он уже приводит к вам клиентов, которые (ищут в поиске/проезжают по дороге/идет в
метро/пользуются 2гис).
Сейчас у Вас есть возможность привести к себе клиентов с Яндекс.Карт.
Представьте, что (описываем примерную картину, применимую к бизнесу клиента)…

Примеры: Ваш клиент едет в машине и ищет автомойку, ему проще и удобнее найти ее прямо в
навигаторе и построить маршрут; Ваш клиент едет в командировку и выбирает гостиницу, ему
важно, чтобы она была рядом с местом его работы. Он заходит на Карты и выбирает именно там.`
: 
`Безусловно, это хороший рекламный инструмент. Он уже приводит к вам клиентов, которые (ищут в поиске/проезжают по дороге/идет в метро/пользуются 2гис).
Сейчас у Вас есть возможность привести к себе клиентов со всего Яндекса/с Яндекс.Карт.
Представьте, что (описываем примерную картину, применимую к бизнесу клиента)…

Примеры: Ваш клиент едет в машине и ищет автомойку, ему проще и удобнее найти ее прямо в
навигаторе и построить маршрут; Ваш клиент едет в командировку и выбирает гостиницу, ему
важно, чтобы она была рядом с местом его работы. Он заходит на Карты и выбирает именно там.`;

    this._didntLike = this._state.chosenProduct === 'Subscription' ? `Это правильно, что Вы тестируете различные рекламные источники. Результат любой рекламы может быть как положительным, так и отрицательным. Попробуйте Рекламную подписку на Яндекс так как здесь большая вероятность, что теплые и близкие клиенты увидят Вас и позвонят/придут/приедут` : this._state.chosenProduct === 'maps' ? `Это правильно, что Вы тестируете различные рекламные источники. Результат любой рекламы может быть как положительным, так и отрицательным. Попробуйте Рекламное размещение на Яндекс.Картах, так как здесь большая вероятность, что теплые и близкие клиенты увидят Вас и позвонят/придут/приедут.`
: 
`Это правильно, что Вы тестируете различные рекламные источники. Результат любой рекламы может быть как положительным, так и отрицательным. Попробуйте Рекламную подписку на Яндекс / Рекламное размещение на Яндекс,Картах так как здесь большая вероятность, что теплые и близкие клиенты увидят Вас и позвонят/придут/приедут.`;

    this._noMoney = this._state.chosenProduct === 'Subscription' ? `Именно поэтому предлагаю воспользоваться Рекламной подпиской на Яндекс, чтобы Вас нашли и принесли Вам прибыль больше теплых и территориально близких клиентов.

Попробуйте, ведь деньги в бизнес могут принести только клиенты, а они как раз ищут Вас в Яндексе.` : this._state.chosenProduct === 'maps' ? `Именно поэтому предлагаю воспользоваться Рекламным размещением на Яндекс.Картах, чтобы Вас нашли и принесли Вам прибыль больше теплых и территориально близких клиентов.
    
Попробуйте, ведь деньги в бизнес могут принести только клиенты, а они как раз ищут Вас в Яндексе.`
    : 
    `Именно поэтому предлагаю воспользоваться Рекламной подпиской на Яндекс / Рекламным размещением на Яндекс.Картах, чтобы Вас нашли и принесли Вам прибыль больше теплых и территориально близких клиентов.
    
Попробуйте, ведь деньги в бизнес могут принести только клиенты, а они как раз ищут Вас в Яндексе`;
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

      <div class="workspace__info_label">Это дорого
<textarea class="workspace__info workspace__info_size_50" disabled>Да, это стоит достойных денег, поскольку приводит целевых клиентов, которые уже хотят купить Ваш товар услугу со всего Яндекса. К тому же именно поэтому мы предлагаем выгодный годовой вариант, с которым Вы экономите 25% своего бюджета.</textarea>
      </div>

      <div class="workspace__info_label">Не сейчас
<textarea class="workspace__info workspace__info_size_75" disabled>Да, конечно, важно принять взвешенное решение. Просто, чем раньше Вы его примете и оплатите счет, тем быстрее клиенты начнут приходить обращаться к Вам, и реклама уже будет окупаться . К тому же, выгодно запустить рекламу именно сейчас, так как сезон/высокий/спрос/много конкурентов.</textarea>
      </div>
      
      <div class="workspace__info_label">Уже пользуется другой рекламой и все устраивает
        <textarea class="workspace__info workspace__info_size_200" disabled>${this._alreadyUse}</textarea>
      </div>

      <div class="workspace__info_label">Уже пользовались похожей рекламой и не понравилось
<textarea class="workspace__info workspace__info_size_50" disabled>${this._didntLike}</textarea>
      </div>

      <div class="workspace__info_label">Нет денег
        <textarea class="workspace__info workspace__info_size_100" disabled>${this._noMoney}</textarea>
      </div>

      <textarea class="workspace__info" disabled>${this._adapt_text}</textarea>

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
        <button id="FPB-02" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-08').click()">Категоричный отказ</button>
        <button id="FPB-03" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-09').click()">Подумаю</button>
        <button id="FPB-04" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-10').click()">Согласен</button>
       </section>`;

    this._callResultPanelElement = `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-callback.png" />Перезвонить</button>
    <div class="call-result-panel__error"></div>`;
  }

  setEventListeners() {
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._callBackButtonHandler('#CRPB-01', 'Scheduled');
  }


}