'use strict';


import navigationPanelButtons from '../utils/metadata/navigationPanelButtons.js'

import Section from '../components/Section.js';
import Button from '../components/Button.js';
import State from '../components/State.js';
import Api from '../utils/api-dev.js';
import View01 from '../components/View01.js';
import View02 from '../components/View02.js';

const navigationPanelSelector = '.navigation-panel';
const callResultSelector = '.call-result-panel'
const workspaceSelector = '.workspace';
const footerPanelSelector = '.footer-panel';

const api = new Api();
const state = new State();
const view01 = new View01({
    callResultButtonClickHandler: sendDisposition
  },
  state.getFullState());
const view02 = new View02({
    callResultButtonClickHandler: sendDisposition,
    clientInfoButtonClickHandler: openClientInfo
  },
  state.getFullState());
const workspaceSection = new Section({}, workspaceSelector);
const callResultSection = new Section({}, callResultSelector);
const footerPanelSection = new Section({}, footerPanelSelector);
generateView({
  workspaceSection,
  callResultSection,
  footerPanelSection
}, view01);

const navigaionPanelSection = new Section({
  items: navigationPanelButtons,
  renderer: (item) => {
    navigaionPanelSection.addItem(createNavigationPanelButton(item))
  }
}, navigationPanelSelector);

function createNavigationPanelButton(item) {
  const button = new Button('#navigation-panel-button', {
    buttonClickHandler: handleNavigationPanelButtonClick
  });

  ;
  return button.generate(item);
}



navigaionPanelSection.renderItems();

function sendDisposition(selector, disposition) {
  document.querySelector(selector).addEventListener('click', () => {
    api.sendDisposition(disposition);
  });
}

function openClientInfo(selector) {
  document.querySelector(selector).addEventListener('click', () => {
      document.querySelector('.workspace__client-info').classList.toggle('workspace__client-info_opened');
  });
}


function handleNavigationPanelButtonClick(button) {
  // Обработка текущей кнопки
  button.classList.add('navigation-panel__button_active');
  button.setAttribute('disabled', 'true');

  // Обработка предыдущей активной кнопки
  state.getItem('activeButton').removeAttribute('disabled');
  state.getItem('activeButton').classList.remove('navigation-panel__button_active');

  // Удаление контента предыдущей страницы
  workspaceSection.removeItem();
  callResultSection.removeItem();
  footerPanelSection.removeItem();

  // Создание новой страницы
  switch (button.getAttribute('Id')) {
    case 'NPB-01':
      generateView({
        workspaceSection,
        callResultSection,
        footerPanelSection
      }, view01);
      break;
    case 'NPB-02':
      generateView({
        workspaceSection,
        callResultSection,
        footerPanelSection
      }, view02);
      break;
    default:
      console.log('Кнопка не найдена.');
  }
  // Внесение изменений в state
  state.setItem('activeButton', button);
  console.log(state);
}

state.setItem('activeButton', document.querySelector('#NPB-01'));
console.log(state);

function generateView(sections, view) {
  sections.workspaceSection.addHTMLItem(view.generateWorkspace());
  sections.footerPanelSection.addHTMLItem(view.generateFooterPanel());
  sections.callResultSection.addHTMLItem(view.generateCallResultPanel());

  view.setEventListeners();
}

/*
state['company'] = 'Голубые Фиалки';
workspaceF01.update(state);
workspaceSection.removeItem();
workspaceSection.addHTMLItem(workspaceF01.generateForm());


document.querySelector('#f1-company-input').addEventListener('change', (evt) => {
  state.setItem('company', evt.target.value);
  console.log(state);
  workspaceF01.update(state.getFullState());
  workspaceSection.removeItem();
  workspaceSection.addHTMLItem(workspaceF01.generateForm());
})
*/