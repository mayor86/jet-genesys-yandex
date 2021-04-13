'use strict';


import navigationPanelButtons from '../utils/metadata/navigationPanelButtons.js'
import callResultButtons01 from '../utils/metadata/pages/page01/callResultButtons.js'
import footerPanelButtons01 from '../utils/metadata/pages/page01/footerPanelButtons.js'
import callResultButtons02 from '../utils/metadata/pages/page02/callResultButtons.js'
import footerPanelButtons02 from '../utils/metadata/pages/page02/footerPanelButtons.js'
import callResultButtons03 from '../utils/metadata/pages/page03/callResultButtons.js'
import footerPanelButtons03 from '../utils/metadata/pages/page03/footerPanelButtons.js'

import Section from '../components/Section.js';
import Button from '../components/Button.js';
import state from '../components/State.js';
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



const navigationPanelSelector = '.navigation-panel';
const callResultSelector = '.call-result-panel'
const workspaceSelector = '.workspace';
const footerPanelSelector = '.footer-panel';

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

;  return button.generate(item);
}

function createCallResultButton(item) {
  const button = new Button('#call-result-panel-button', {
    buttonClickHandler: handleCallResultButtonClick
  });

  return button.generate(item);
}

function createFooterPanelButton(item) {
  const button = new Button('#footer-panel-button', {
    buttonClickHandler: handleFooterPanelButtonClick
  });

  return button.generate(item);
}

const workspaceSection = new Section({}, workspaceSelector);
const callResultSection = new Section({}, callResultSelector);
const footerPanelSection = new Section({}, footerPanelSelector);

navigaionPanelSection.renderItems();

function handleCallResultButtonClick(button) {
  console.log(button);
}

function handleFooterPanelButtonClick(button) {
  console.log(button);
}

function handleNavigationPanelButtonClick(button) {
  // Обработка текущей кнопки
  button.classList.add('navigation-panel__button_active');
  button.setAttribute('disabled', 'true');

  // Обработка предыдущей активной кнопки
  state.getState('activeButton').removeAttribute('disabled');
  state.getState('activeButton').classList.remove('navigation-panel__button_active');

  // Удаление контента предыдущей страницы
  workspaceSection.removeItem();
  callResultSection.removeItem();
  footerPanelSection.removeItem();

  // Создание новой страницы
  if (button.getAttribute('Id').split('-')[1] === '01') {
    // 
    workspaceSection.addHTMLItem(workspaceF01.generateForm());

    callResultButtons01.forEach(item => {
      callResultSection.addItem(createCallResultButton(item))
    });

    footerPanelButtons01.forEach(item => {
      footerPanelSection.addItem(createFooterPanelButton(item))
    });

  }

  if (button.getAttribute('Id').split('-')[1] === '02') {
    workspaceSection.addHTMLItem(workspaceF02.generateForm());

    callResultButtons02.forEach(item => {
      callResultSection.addItem(createCallResultButton(item))
    });

    footerPanelButtons02.forEach(item => {
      footerPanelSection.addItem(createFooterPanelButton(item))
    });
  }

  if (button.getAttribute('Id').split('-')[1] === '03') {
    workspaceSection.addHTMLItem(workspaceF03.generateForm());

    callResultButtons03.forEach(item => {
      callResultSection.addItem(createCallResultButton(item))
    });

    footerPanelButtons03.forEach(item => {
      footerPanelSection.addItem(createFooterPanelButton(item))
    });
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
  state.setItem('activeButton', button);


  //  console.log('IS_Attr_CampaignId: ' + document.head.getElementsByTagName('meta')[2].value);
}


/*
document.querySelectorAll(navigationPanelBtnSelector).forEach(btn => {
  btn.addEventListener('click', handlePanelBtnClick);
})
*/

const workspaceF01 = new WorkspaceF01(state.getFullState());
workspaceSection.addHTMLItem(workspaceF01.generateForm());
const workspaceF02 = new WorkspaceF02(state.getFullState());
const workspaceF03 = new WorkspaceF03(state.getFullState());
const workspaceF04 = new WorkspaceF04(state.getFullState());
const workspaceF05 = new WorkspaceF05(state.getFullState());
const workspaceF06 = new WorkspaceF06(state.getFullState());
const workspaceF07 = new WorkspaceF07(state.getFullState());
const workspaceF08 = new WorkspaceF08(state.getFullState());
const workspaceF09 = new WorkspaceF09(state.getFullState());
const workspaceF10 = new WorkspaceF10(state.getFullState());
const workspaceF11 = new WorkspaceF11(state.getFullState());
const workspaceF12 = new WorkspaceF12(state.getFullState());
const workspaceF13 = new WorkspaceF13(state.getFullState());
const workspaceF14 = new WorkspaceF14(state.getFullState());

/*
state['company'] = 'Голубые Фиалки';
workspaceF01.update(state);
workspaceSection.removeItem();
workspaceSection.addHTMLItem(workspaceF01.generateForm());
*/
console.log(state);
document.querySelector('#f1-company-input').addEventListener('change', (evt) => {
  state.setItem('company', evt.target.value);
  console.log(state);
  workspaceF01.update(state.getFullState());
  workspaceSection.removeItem();
  workspaceSection.addHTMLItem(workspaceF01.generateForm());
})