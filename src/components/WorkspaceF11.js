// ОПЛАТИТЬ КАК ФИЗ.ЛИЦО
import Workspace from './Workspace.js'
export default class WorkspaceF11 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f11" novalidate>

                      <input id="f11-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>
                      
                      <input id="f11-price-input" type="number" class="workspace__input-el" name="price" placeholder="Стоимость" >
                      <input id="f11-period-input" type="text" class="workspace__input-el" name="period" placeholder="Период" >
                      <input id="f11-login-input" type="text" class="workspace__input-el" name="login" placeholder="Логин" >
                      <input id="f11-order-input" type="text" class="workspace__input-el" name="order" placeholder="ID заказа" >
                      <input id="f11-expected-pay-date-input" type="date" class="workspace__input-el" name="job-title" placeholder="Ожидаемая дата оплаты" >
                      <input id="f11-comment-input" type="text" class="workspace__input-el" name="comment" placeholder="Комментарий" >

                      <label class="workspace__label" for="f11-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f11-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  disabled>
                      </label>

                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}