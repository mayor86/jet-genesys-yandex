// View: Стартовая страница
class View01 extends View {
  constructor(handler, state) {
    super(handler);

    this._state = state;
    this._status = this._state.status;
    this._answers = 
      `${this._state.q1}
      ${this._state.q2}
      ${this._state.q3}
      ${this._state.q4}
      ${this._state.q5}`;
    this._workspaceElement =
      `<form class="workspace__container" name="f1" novalidate>
      <label class="workspace__label" for="phone-input">
        Номер для набора
        <input id="phone-input" type="text" class="workspace__input-el" name="phone" value="${this._state.numberToDial}" >
      </label>
      <label class="workspace__label" for="company-input">
        Название компании
        <input id="company-input" type="text" class="workspace__input-el" name="company" value="${this._state.company}" disabled >
      </label>
      <label class="workspace__label" for="lpr-input">
        Имя ЛПР
        <input id="lpr-input" type="text" class="workspace__input-el" name="lpr" value="${this._state.lpr}" disabled >
      </label>
      <label class="workspace__label" for="status-input">
        Статус
        <input id="status-input" type="text" class="workspace__input-el" name="status" value="${this._status}" disabled>
      </label>
      <label class="workspace__label" for="branch-input">
        Отрасль
        <input id="branch-input" type="text" class="workspace__input-el" name="branch" value="${this._state.branch}" disabled>
      </label>
      <label class="workspace__label" for="comment-input">
        Комментарий
        <input id="comment-input" type="text" class="workspace__input-el" name="comment" value="${this._state.comment}" disabled>
      </label>
      <label class="workspace__label" for="address-input">
        Адрес
        <input id="address-input" type="text" class="workspace__input-el" name="address" value="${this._state.address}" disabled>
      </label>
      <label class="workspace__label" for="answers-input" >
        Ответы на вопросы
        <input id="answers-input" type="text" class="workspace__input-el" name="answers" value="${this._answers}" >
      </label>
      <label class="workspace__label" for="lk-link-input">
        Ссылка на личный кабинет
        <input id="lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}"  disabled >
      </label>
    </form>`;

    this._footerPanelElement =
      `<section class="footer-panel__container">
        <button id="FPB-01" class="button footer-panel__button" type="button" onclick="${this._getNavigationPanelButtonForFPB01()}.click()">Скрипт</button>
        <button id="FPB-02" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-09').click()">Закрыто и не реализовано</button>
        <button id="FPB-03" class="button footer-panel__button" type="button" onclick="document.querySelector('#NPB-09').click()">Успешно реализовано</button>
       </section>`;

    this._callResultPanelElement =
      `<button id="CRPB-01" class="button call-result-panel__button" type="button">Занято</button>
      <button id="CRPB-02" class="button call-result-panel__button" type="button">Не отвечает</button>
      <button id="CRPB-03" class="button call-result-panel__button" type="button">Неправильный номер</button>
      <button id="CRPB-04" class="button call-result-panel__button" type="button">Перезвонить</button>`;
  }

  _getNavigationPanelButtonForFPB01() {
    if (this._status === 'Отправить счет') {
      //  if ('ПРИЗНАК ОЖИДАЕМ РЕКВИЗИТ' === 'Y') {
      //    return `document.querySelector('#NPB-08')`
      //  }
      return `document.querySelector('#NPB-03')`
    }

    return `document.querySelector('#NPB-02')`;
  }

  setEventListeners() {
    this._callResultHandler('#CRPB-01', 'Busy');
    this._callResultHandler('#CRPB-02', 'No Answer');
    this._callResultHandler('#CRPB-03', 'Wrong Party');
  }
}