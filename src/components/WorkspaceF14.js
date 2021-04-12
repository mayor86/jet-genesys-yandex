// 5.15	Успешно реализовано
import Workspace from './Workspace.js'
export default class WorkspaceF14 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f14" novalidate>
                     
                      <input id="f14-trx-smvp-input" type="number" class="workspace__input-el" name="trx-smvp" placeholder="Транзакция СМВП" >
                      <input id="f14-pay-date-input" type="date" class="workspace__input-el" name="pay-date" placeholder="Дата оплаты" >
                      <input id="f14-flayt-input" type="text" class="workspace__input-el" name="flayt" placeholder="ID флайта" >
                      <input id="f14-comment-input" type="text" class="workspace__input-el" name="comment" placeholder="Комментарий" >

                      <label class="workspace__label" for="f14-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f14-lk-link-input" type="link" class="workspace__input-el" name="lk-link" disabled>
                      </label>

                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}