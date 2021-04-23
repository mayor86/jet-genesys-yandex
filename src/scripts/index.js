'use strict';

const navigationPanelSelector = '.navigation-panel';
const navigationSmallPanelSelector = '.navigation-panel-small';
const workspaceSelector = '.workspace';
const footerPanelSelector = '.footer-panel';
const callResultPanelSelector = '.call-result-panel'
const popupSelector = '.popup';
const navigationPanelSection = new Section({}, navigationPanelSelector);
const navigationSmallPanelSection = new Section({}, navigationSmallPanelSelector);
const workspaceSection = new Section({}, workspaceSelector);
const callResultPanelSection = new Section({}, callResultPanelSelector);
const footerPanelSection = new Section({}, footerPanelSelector);

function createCallCard() {
  const api = new Api({
    removeCallCardHandler: removeCallCard
  });

  const popup = new Popup({
    scheduleHandler: schedule
  }, popupSelector);
  popup.setEventListeners();
  const state = new State();
  /**
   * Вспомогательные функции. Предназначены для передачи в классы ViewNN
   * sendDisposition - фиксация результата звонка (передача данных в бэкенд);
   * openClientInfo - открытие/закрытие секции Информация о клиенте;
   * goToPreviousView - реализация кнопки Назад (переход на предыдущее представление);
   * openPopup - открытие popup Перезвонить
   */
  function sendDisposition(selector, disposition) {
    document.querySelector(selector).addEventListener('click', () => {
      api.sendDisposition(disposition);
    });
  }

  function openClientInfo(selector) {
    document.querySelector(selector).addEventListener('click', () => {
      document.querySelector('.workspace__client-profile').classList.toggle('workspace__client-profile_opened');
      document.querySelector('.workspace__client-info-image').classList.toggle('workspace__client-info-image_closed');
    });
  }

  function goToPreviousView(selector) {
    document.querySelector(selector).addEventListener('click', () => {
      state.getItem('previousButton').click();
    })
  }

  function openPopup(selector) {
    document.querySelector(selector).addEventListener('click', () => {
      popup.open();
    })
  }

  function schedule(data) {
    api.schedule(data);
  }


  function generateView(view) {
    workspaceSection.addHTMLItem(view.generateWorkspace());
    footerPanelSection.addHTMLItem(view.generateFooterPanel());
    callResultPanelSection.addHTMLItem(view.generateCallResultPanel());

    view.setEventListeners();
  }
  /*************************************************************************
   * 
   * ***********************************************************************/
  const view01 = new View01({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: '',
      goToPreviousViewHandler: '',
      openPopupHandler: openPopup
    },
    state.getFullState());
  const view02 = new View02({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view03 = new View03({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view04 = new View04({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view05 = new View05({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view06 = new View06({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view07 = new View07({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view08 = new View08({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view09 = new View09({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view10 = new View10({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view11 = new View11({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view12 = new View12({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view13 = new View13({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const view14 = new View14({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: openClientInfo,
      goToPreviousViewHandler: goToPreviousView
    },
    state.getFullState());

  const navigaionSmallPanelSection = new Section({
    items: navigationSmallPanelButtons,
    renderer: (item) => {
      navigaionSmallPanelSection.addItem(createNavigationSmallPanelButton(item))
    }
  }, navigationSmallPanelSelector);

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

  function createNavigationSmallPanelButton(item) {
    const button = new Button('#navigation-panel-small-button', {
      buttonClickHandler: handleNavigationPanelSmallButtonClick
    });

    ;
    return button.generate(item);
  }

  function handleNavigationPanelSmallButtonClick(button) {
    // Обработка текущей кнопки
    button.classList.add('navigation-panel-small__button_active');
    button.setAttribute('disabled', 'true');

    const smallButtonId = button.getAttribute('id');
    const largeButtonId = '#NPB-' + smallButtonId.split('-')[1];
    const largeButton = document.querySelector(largeButtonId);

    const previousActiveSmallButtonId = '#NPSB-'+ state.getItem('activeButton').getAttribute('Id').split('-')[1];
    const previousActiveSmallButton = document.querySelector(previousActiveSmallButtonId);

    // Обработка предыдущей активной кнопки
    previousActiveSmallButton.removeAttribute('disabled');
    previousActiveSmallButton.classList.remove('navigation-panel-small__button_active');

    largeButton.click();
  }

  function handleNavigationPanelButtonClick(button) {
    // Обработка текущей кнопки
    button.classList.add('navigation-panel__button_active');
    button.setAttribute('disabled', 'true');

    const smallButtonId = '#NPSB-' + button.getAttribute('id').split('-')[1];
    const smallButton = document.querySelector(smallButtonId);
    smallButton.classList.add('navigation-panel-small__button_active');
    smallButton.setAttribute('disabled', 'true');

    // Обработка предыдущей активной кнопки
    state.getItem('activeButton').removeAttribute('disabled');
    state.getItem('activeButton').classList.remove('navigation-panel__button_active');
    const previousActiveSmallButtonId = '#NPSB-'+ state.getItem('activeButton').getAttribute('Id').split('-')[1];
    const previousActiveSmallButton = document.querySelector(previousActiveSmallButtonId);
    previousActiveSmallButton.removeAttribute('disabled');
    previousActiveSmallButton.classList.remove('navigation-panel-small__button_active');

    // Удаление контента предыдущей страницы
    workspaceSection.removeItem();
    footerPanelSection.removeItem();
    callResultPanelSection.removeItem();
    // Создание новой страницы
    switch (button.getAttribute('Id')) {
      case 'NPB-01':
        generateView(view01);
        break;
      case 'NPB-02':
        generateView(view02);
        break;
      case 'NPB-03':
        generateView(view03);
        break;
      case 'NPB-04':
        generateView(view04);
        break;
      case 'NPB-05':
        generateView(view05);
        break;
      case 'NPB-06':
        generateView(view06);
        break;
      case 'NPB-07':
        generateView(view07);
        break;
      case 'NPB-08':
        generateView(view08);
        break;
      case 'NPB-09':
        generateView(view09);
        break;
      case 'NPB-10':
        generateView(view10);
        break;
      case 'NPB-11':
        generateView(view11);
        break;
      case 'NPB-12':
        generateView(view12);
        break;
      case 'NPB-13':
        generateView(view13);
        break;
      case 'NPB-14':
        generateView(view14);
        break;
      default:
        console.log('Кнопка не найдена.');
    }
    // Внесение изменений в state
    state.setItem('previousButton', state.getItem('activeButton'));
    state.setItem('activeButton', button);
  }

  /**
   * Инициализация Стартовой страницы
   */
  // инициализация кнопок навигационной панели
  navigaionSmallPanelSection.renderItems(); 
  navigaionPanelSection.renderItems();
  navigaionSmallPanelSection.addHTMLItem('<button class="navigation-panel-small__close-button" type="button"></button>');
  document.querySelector('.navigation-panel-small__close-button').addEventListener('click', () => {
    document.querySelector('.navigation-panel-small__close-button').classList.toggle('navigation-panel-small__close-button_closed');
    document.querySelector(navigationPanelSelector).classList.toggle('navigation-panel_closed');
  })

  // установка активной страницы = Стартовая страница в state
  state.setItem('activeButton', document.querySelector('#NPB-01'));

  // Генерация стартовой страницы
  generateView(view01); 

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

  removeCallCard();
}

function removeCallCard() {
  navigationPanelSection.removeItem();
  workspaceSection.removeItem();
  callResultPanelSection.removeItem();
  footerPanelSection.removeItem();

  workspaceSection.removeItem();
  workspaceSection.addHTMLItem('<h1>Ожидание следующей карточки звонка...</h1>');
}

createCallCard();