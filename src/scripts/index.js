'use strict';

function createApp() {

  const navigationPanelSelector = '.navigation-panel';
  const callResultSelector = '.call-result-panel'
  const workspaceSelector = '.workspace';
  const footerPanelSelector = '.footer-panel';

  const api = new Api({
    destroyApp: destroyApp
  });
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
    /*
    // Удаление контента предыдущей страницы
    workspaceSection.removeItem();
    callResultSection.removeItem();
    footerPanelSection.removeItem();
    */
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
    // Удаление контента предыдущей страницы
    workspaceSection.removeItem();
    callResultSection.removeItem();
    footerPanelSection.removeItem();

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
}

function IS_Event_PreviewCallSkipped() {
  IS_Action_ClientStatus.statuskey = "Available";
  IS_Action_ClientStatus.click();

  destroyApp();
}

function destroyApp() {
  console.log('destroyApp >>');
  const workspaceSection = new Section({}, '.workspace');
  const callResultSection = new Section({}, '.call-result-panel');
  const footerPanelSection = new Section({}, '.footer-panel');
  const navigationPanelSection = new Section({}, '.navigation-panel');
  navigationPanelSection.removeItem();
  workspaceSection.removeItem();
  callResultSection.removeItem();
  footerPanelSection.removeItem();

  workspaceSection.removeItem();
  workspaceSection.addHTMLItem('<h1>Ожидание следующей карточки звонка...</h1>');

}