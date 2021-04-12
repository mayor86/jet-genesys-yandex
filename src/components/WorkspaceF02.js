// СВЯЗЬ С ПРЕДСТАВИТЕЛЕМ
import Workspace from './Workspace.js'
export default class WorkspaceF02 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f2" novalidate> 
                        <input id="f2-hello-input" type="text" class="workspace__input-el" name="hello" disabled>
                      <label class="workspace__label" for="f2-reason-input">
                        Если спросили про причину
                        <input id="f2-reason-input" type="text" class="workspace__input-el" name="reason" disabled>
                      </label>
                    </form>`;
  }

  generateForm() {
    return this._element;
  }
}