import initialData from '../utils/initialData.js';
import Section from '../components/Section.js';
import Form from '../components/Form.js';
import NavigationButton from '../components/NavigationButton.js';
import State from '../components/State.js';
import WorkspaceF01 from '../components/WorkspaceF01.js';
import WorkspaceF02 from '../components/WorkspaceF02.js'

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
  activeWorkspace: document.querySelector('#w-01')
});

const workspaceF01 = new WorkspaceF01('');
workspaceSection.addHTMLItem(workspaceF01.generateForm());
const workspaceF02 = new WorkspaceF02('');