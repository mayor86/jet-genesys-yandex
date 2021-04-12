// ВЫЯВЛЕНИЕ ПОТРЕБНОСТИ
import Workspace from './Workspace.js'
export default class WorkspaceF04 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f4" novalidate>
                      <input id="f4-questions-input" type="text" class="workspace__input-el" name="questions" disabled>
                      <input id="f4-answer1-input" type="text" class="workspace__input-el" name="answer1" placeholder="Ответ 1:">
                      <input id="f4-answer2-input" type="text" class="workspace__input-el" name="answer2" placeholder="Ответ 2:" >
                      <input id="f4-answer3-input" type="text" class="workspace__input-el" name="answer3" placeholder="Ответ 3:" >
                      <input id="f4-answer4-input" type="text" class="workspace__input-el" name="answer4" placeholder="Ответ 4:" >
                      <input id="f4-answer5-input" type="text" class="workspace__input-el" name="answer5" placeholder="Ответ 5:" >
                      <label class="workspace__label" for="f4-prompt-input">
                        Подсказка
                        <input id="f4-prompt-input" type="text" class="workspace__input-el" name="prompt" disabled>
                      </label>
                      <label class="workspace__label" for="f4-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f4-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  disabled>
                      </label>
                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}