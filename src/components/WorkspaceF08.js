// КАТЕГОРИЧНЫЙ ОТКАЗ / ЗАКРЫТЬ СДЕЛКУ
import Workspace from './Workspace.js'
export default class WorkspaceF08 extends Workspace {
  constructor(state) {
    super(state);
    this._element = `<form class="workspace__container" name="f8" novalidate>

                     
                        
                        <input id="f8-reason-input" type="text" class="workspace__input-el" name="reason"  placeholder="Причина закрытия">
                      

                

                    </form>`;
  }

  
}