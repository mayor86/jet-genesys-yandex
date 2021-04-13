// 5.15	Успешно реализовано
import Workspace from './Workspace.js'
export default class WorkspaceF14 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f14" novalidate>
                     
                      <input id="f14-trx-smvp-input" type="text" class="workspace__input-el" name="trx-smvp" placeholder="Транзакция СМВП" value="${this._state.trxSMVP}">
                      <input id="f14-pay-date-input" type="text" class="workspace__input-el" name="pay-date" onfocus="(this.type='date')" onblur="(this.type='text')" placeholder="Дата оплаты" value="${this._state.payDate}">
                      <input id="f14-flayt-input" type="text" class="workspace__input-el" name="flayt" placeholder="ID флайта" value="${this._state.flaytId}">
                      <input id="f14-comment-input" type="text" class="workspace__input-el" name="comment" placeholder="Комментарий" value="${this._state.comment}">

                      <label class="workspace__label" for="f14-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f14-lk-link-input" type="link" class="workspace__input-el" name="lk-link" value="${this._state.lkLink}" disabled>
                      </label>

                    </form>`;
  }

  
}