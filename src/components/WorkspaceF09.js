// КЛИЕНТ ПОДУМАЕТ / ОТПРАВИТЬ ОТЧЕТ
import Workspace from './Workspace.js'
export default class WorkspaceF09 extends Workspace {
  constructor(scripterData) {
    super(scripterData);
    this._element = `<form class="workspace__container" name="f9" novalidate>
                      <input id="f9-infromation-input" type="text" class="workspace__input-el" name="infromation" disabled>

                      <input id="f9-first-call-date-input" type="date" class="workspace__input-el" name="first-call-date" placeholder="Дата первого звонка" >
                      <input id="f9-lpr-input" type="text" class="workspace__input-el" name="lpr" placeholder="Имя ЛПР" >
                      <input id="f9-phone-input" type="text" class="workspace__input-el" name="phone" placeholder="Телефон" >
                      <input id="f9-kp-date-input" type="text" class="workspace__input-el" name="kp-date" placeholder="Дата отправки КП" >
                      <input id="f9-job-title-input" type="text" class="workspace__input-el" name="job-title" placeholder="Должность" >
                      <input id="f9-email-input" type="text" class="workspace__input-el" name="email" placeholder="E-mail" >
                      <input id="f9-comment-input" type="text" class="workspace__input-el" name="comment" placeholder="Комментарий" >
                      

                      <label class="workspace__label" for="f9-lk-link-input">
                        Ссылка на личный кабинет
                        <input id="f9-lk-link-input" type="link" class="workspace__input-el" name="lk-link"  disabled>
                      </label>

                    </form>`;
  }

 
}