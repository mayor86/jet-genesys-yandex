// 5.14	Оплата как юр. Лицо (предоставил реквизиты)
import Workspace from './Workspace.js'
export default class WorkspaceF13 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f13" novalidate>

                      <input id="f13-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>
                      
                      <input id="f13-price-input" type="number" class="workspace__input-el" name="price" placeholder="Стоимость" value="${this._state.price}">
                      <input id="f13-period-input" type="text" class="workspace__input-el" name="period" placeholder="Период" value="${this._state.period}">
                      <input id="f13-login-input" type="text" class="workspace__input-el" name="login" placeholder="Логин" value="${this._state.login}">
                      <input id="f13-order-input" type="text" class="workspace__input-el" name="order" placeholder="ID заказа" value="${this._state.order}">
                      <input id="f13-expected-pay-date-input" type="date" class="workspace__input-el" name="job-title" placeholder="Ожидаемая дата оплаты" value="${this._state.expectedPayDate}">
                      <input id="f13-comment-input" type="text" class="workspace__input-el" name="comment" placeholder="Комментарий" value="${this._state.comment}">

                      <label class="workspace__label" for="f13-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f13-lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}" disabled>
                      </label>

                    </form>`;
  }

  
}