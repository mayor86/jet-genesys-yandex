import initialData from '../utils/initialData.js';
import Section from '../components/Section.js';
import Form from '../components/Form.js';
import NavigationButton from '../components/NavigationButton.js';
import State from '../components/State.js';
import WorkspaceF01 from '../components/WorkspaceF01.js';
import WorkspaceF02 from '../components/WorkspaceF02.js';
import WorkspaceF03 from '../components/WorkspaceF03.js';
import WorkspaceF04 from '../components/WorkspaceF04.js';
import WorkspaceF05 from '../components/WorkspaceF05.js';
import WorkspaceF06 from '../components/WorkspaceF06.js';
import WorkspaceF07 from '../components/WorkspaceF07.js';
import WorkspaceF08 from '../components/WorkspaceF08.js';
import WorkspaceF09 from '../components/WorkspaceF09.js';
import WorkspaceF10 from '../components/WorkspaceF10.js';
import WorkspaceF11 from '../components/WorkspaceF11.js';
import WorkspaceF12 from '../components/WorkspaceF12.js';
import WorkspaceF13 from '../components/WorkspaceF13.js';
import WorkspaceF14 from '../components/WorkspaceF14.js';

const navigationPanelButtonSelector = '.navigation-panel__button'
const navigationPanelSelector = '.navigation-panel';
const workspaceSelector = '.workspace';

function createNewNavigationButton(item) {
  const navigationButton = new NavigationButton('#navigation-panel-button', {
    buttonClickHandler: handlePanelButtonClick
  });

  return navigationButton.generateButton(item);
}

const navigaionPanelSection = new Section({
  items: initialData,
  renderer: (item) => {
    navigaionPanelSection.addItem(createNewNavigationButton(item))
  }
}, navigationPanelSelector);

const workspaceSection = new Section({
  items: '',
  renderer: ''
}, workspaceSelector);

navigaionPanelSection.renderItems();

function handlePanelButtonClick(button) {
  // Обработка текущей кнопки
  button.classList.add('navigation-panel__button_active');
  button.setAttribute('disabled', 'true');
  // Обработка предыдущей активной кнопки
  state.getState('activeButton').removeAttribute('disabled');
  state.getState('activeButton').classList.remove('navigation-panel__button_active');
  // Создание контента рабочей области
  workspaceSection.removeItem();

  if (button.getAttribute('Id').split('-')[1] === '01') {
    workspaceSection.addHTMLItem(workspaceF01.generateForm());
  } 
  
  if (button.getAttribute('Id').split('-')[1] === '02') {
    workspaceSection.addHTMLItem(workspaceF02.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '03') {
    workspaceSection.addHTMLItem(workspaceF03.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '04') {
    workspaceSection.addHTMLItem(workspaceF04.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '05') {
    workspaceSection.addHTMLItem(workspaceF05.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '06') {
    workspaceSection.addHTMLItem(workspaceF06.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '07') {
    workspaceSection.addHTMLItem(workspaceF07.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '08') {
    workspaceSection.addHTMLItem(workspaceF08.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '09') {
    workspaceSection.addHTMLItem(workspaceF09.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '10') {
    workspaceSection.addHTMLItem(workspaceF10.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '11') {
    workspaceSection.addHTMLItem(workspaceF11.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '12') {
    workspaceSection.addHTMLItem(workspaceF12.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '13') {
    workspaceSection.addHTMLItem(workspaceF13.generateForm());
  }

  if (button.getAttribute('Id').split('-')[1] === '14') {
    workspaceSection.addHTMLItem(workspaceF14.generateForm());
  }
  // Внесение изменений в state
  state.setState('activeButton', button);


  //  console.log('IS_Attr_CampaignId: ' + document.head.getElementsByTagName('meta')[2].value);
}


/*
document.querySelectorAll(navigationPanelBtnSelector).forEach(btn => {
  btn.addEventListener('click', handlePanelBtnClick);
})
*/

const state = new State({
  activeButton: document.querySelector('#npb-01'),
  activeWorkspace: document.querySelector('#w-01'),
  company: "Алые Фиалки",
  lpr: 'Александр'
});

const workspaceF01 = new WorkspaceF01(state.getFullState());
workspaceSection.addHTMLItem(workspaceF01.generateForm());
const workspaceF02 = new WorkspaceF02('');
const workspaceF03 = new WorkspaceF03('');
const workspaceF04 = new WorkspaceF04('');
const workspaceF05 = new WorkspaceF05('');
const workspaceF06 = new WorkspaceF06('');
const workspaceF07 = new WorkspaceF07('');
const workspaceF08 = new WorkspaceF08('');
const workspaceF09 = new WorkspaceF09('');
const workspaceF10 = new WorkspaceF10('');
const workspaceF11 = new WorkspaceF11('');
const workspaceF12 = new WorkspaceF12('');
const workspaceF13 = new WorkspaceF13('');
const workspaceF14 = new WorkspaceF14('');

/*
state['company'] = 'Голубые Фиалки';
workspaceF01.update(state);
workspaceSection.removeItem();
workspaceSection.addHTMLItem(workspaceF01.generateForm());
*/
console.log(state);
document.querySelector('#f1-company-input').addEventListener('change', (evt) => {
  state.setState('company', evt.target.value);
  console.log(state);
  workspaceF01.update(state.getFullState());
  workspaceSection.removeItem();
  workspaceSection.addHTMLItem(workspaceF01.generateForm());
})