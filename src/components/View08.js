// View: Категоричный отказ/Закрыть сделку
class View08 extends View {
  constructor(handler, state) {
    super(handler);

    this._reason = {
      product: ['1', '2'],
      price: ['3', '4'],
      other: ['5', '6']
    };

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
        <label class="workspace__label">
        Категория
          <select id="reason-category" class="workspace__input-el workspace__input-el_dropdown">
          <option selected value></option>
            <option value="product">Продукт_эффективность</option>
            <option value="price">Цена</option>
            <option value="other">Другое</option>
          </select>
        </label>
        <label class="workspace__label">
        Причина закрытия
          <select id="reason" class="workspace__input-el workspace__input-el_dropdown">
          <option selected value></option>
            <option value="bad_load">Брак-Ошибка в заливке-Тест</option>
            <option value="return_money">Возврат средств</option>
            <option value="expensive">Дорого</option>
            <option value="other">Другое</option>
            <option value="duplicate">Дубль</option>
            <option value="closed">Компания закрыта</option>
            <option value="no_faith">Не верю в эффективность</option>
            <option value="cant_call_lpr">Не вышли на ЛПР</option>
            <option value="sprav_incorrect">Не корректная работа Справочника</option>
            <option value="no_season">Не сезон</option>
            <option value="no_format">Не формат Справочника</option>
            <option value="format_unclear">Неочевидность формата</option>
            <option value="no_effect">Неэффективная рекламная компания</option>
            <option value="reject_talk">Отказ от разговора</option>
            <option value="reject_budget">Отказ по бюджету</option>
            <option value="move_to_corp">Передано корп. менеджерам</option>
            <option value="blacklist">Черный список / geo spam</option>
            <option value="autoclose">автозакрытие</option>
          </select>
        </label>
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

    this._callResultPanelElement = `<button id="CRPB-01" class="call-result-panel__button" type="button"><img class="call-result-panel__image" src="./images/call-result-close-fail.png" />Закрыто и не реализовано</button>
    <div class="call-result-panel__error"></div>`;
  }

  setEventListeners() {
    document.querySelector('#CRPB-01').addEventListener('click', () => {
      this._setStateItemHandler('status', 'Закрыто и не реализовано')
    });

    this._callResultHandler('#CRPB-01', 'lead_closed');
    this._clientInfoHandler('.workspace__client-info-button');
    this._backButtonHandler('#FPB-01');
    this._changeFieldValueHandler('#reason', 'lossReason');

    this._changeReasonCategoryHandler();
  }

  _changeReasonCategoryHandler() {
    const category = document.querySelector('#reason-category');
    const reason = document.querySelector('#reason');
    const categoryLength = Object.keys(this._reason).length;
    console.log(categoryLength);
    category.addEventListener('change', () => {
    reason.innerHTML = '';
    
      
      for(let i = 0; i < categoryLength; i++) {
        
        reason.add(new Option(this._reason[category.value][i],i,false,false));
      }

    })
  }
}