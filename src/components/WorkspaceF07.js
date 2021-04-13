// ОТРАБОТКА ВОЗРАЖЕНИЙ
import Workspace from './Workspace.js'
export default class WorkspaceF07 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f7" novalidate>

                      <label class="workspace__label" for="f7-too-much-input">
                        Дорого:
                        <input id="f7-too-much-input" type="text" class="workspace__input-el" name="too-much"  disabled>
                      </label>

                      <label class="workspace__label" for="f7-not-now-input">
                        Не сейчас:
                        <input id="f7-not-now-input" type="text" class="workspace__input-el" name="not-now"  disabled>
                      </label>

                      <label class="workspace__label" for="f7-another-adv-ok-input">
                        Уже пользуется другой рекламой и все устраивает:
                        <input id="f7-another-adv-ok-input" type="text" class="workspace__input-el" name="another-adv-ok"  disabled>
                      </label>

                      <label class="workspace__label" for="f7-another-adv-bad-input">
                        Уже пользовались похожей рекламой и все устраивает:
                        <input id="f7-another-adv-bad-input" type="text" class="workspace__input-el" name="another-adv-bad"  disabled>
                      </label>

                      <label class="workspace__label" for="f7-no-money-input">
                        Нет денег:
                        <input id="f7-no-money-input" type="text" class="workspace__input-el" name="no-money"  disabled>
                      </label>

                      <label class="workspace__label" for="f7-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f7-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  value="${this._state.lkLink}" disabled>
                      </label>

                    </form>`;
  }

  
}