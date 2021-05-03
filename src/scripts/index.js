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
    removeCallCardHandler: removeCallCard,
    sendStateHandler: sendStatetoAPI
  });

  const popup = new Popup({
    scheduleHandler: schedule
  }, popupSelector);
  popup.setEventListeners();

  /**
   * Вспомогательные функции. Предназначены для передачи в классы ViewNN
   * sendDisposition - фиксация результата звонка (передача данных в бэкенд);
   * openClientInfo - открытие/закрытие секции Информация о клиенте;
   * goToPreviousView - реализация кнопки Назад (переход на предыдущее представление);
   * openPopup - открытие popup Перезвонить;
   * schedule - вызов API Genesys;
   * changeFieldValue - апдейт state после изменения поля
   */
  function sendDisposition(selector, disposition) {
    document.querySelector(selector).addEventListener('click', () => {
      try {
        document.querySelector('.call-result-panel__error').innerHTML = '';
        api.sendDisposition(disposition);
      } catch (e) {
        document.querySelector('.call-result-panel__error').innerHTML = 'Ошибка при выполнении функции sendDisposition ' + e;
      }
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
      state.previousButton.click();
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

  function changeFieldValue(selector, field) {
    document.querySelector(selector).addEventListener('change', (evt) => {
      state[field] = evt.target.value;
      console.log(state);
    })
  }

  function setStateItem(field, value) {
    state[field] = value;
  }

  function sendStatetoAPI() {
    IS_Attr_numbertodial.value = state.numberToDial;
    IS_Attr_COMPANY_NAME.value = state.company;
    IS_Attr_contactname.value = state.lpr;
    IS_Attr_contactstate.value = state.status;
    IS_Attr_Heading.value = state.branch;
    IS_Attr_comment.value = state.comment;
    IS_Attr_Address.value = state.address;
    IS_Attr_Link_to_personal_account.value = state.lkLink
    IS_Attr_Q1.value = state.q1;
    IS_Attr_Q2.value = state.q2;
    IS_Attr_Q3.value = state.q3;
    IS_Attr_Q4.value = state.q4;
    IS_Attr_Q5.value = state.q5;
    IS_Attr_contact_phone.value = state.phone;
    IS_Attr_contact_position.value = state.jobTitle
    IS_Attr_contact_email.value = state.email;
    IS_Attr_presentation_date.value = state.kpDate;
    IS_Attr_call_date.value = state.firstCallDate;
    IS_Attr_budget.value = state.price;
    IS_Attr_distribution_period.value = state.period;
    IS_Attr_login.value = state.login;
    //.value = state.order;
    IS_Attr_pay_date.value = state.expectedPayDate;
    IS_Attr_SMVP_transaction.value = state.trxSMVP;
    IS_Attr_Pay_date.value = state.payDate;
    IS_Attr_id_flight.value = state.flaytId;
    IS_Attr_tag_sent_invoice.value = state.sentInvoiceFlag;
    IS_Attr_Chosen_product.value = state.chosenProduct;
  }

  function generateView(view) {
    workspaceSection.addHTMLItem(view.generateWorkspace());
    footerPanelSection.addHTMLItem(view.generateFooterPanel());
    callResultPanelSection.addHTMLItem(view.generateCallResultPanel());

    view.setEventListeners();
  }

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

    const previousActiveSmallButtonId = '#NPSB-' + state.activeButton.getAttribute('Id').split('-')[1];
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
    state.activeButton.removeAttribute('disabled');
    state.activeButton.classList.remove('navigation-panel__button_active');
    const previousActiveSmallButtonId = '#NPSB-' + state.activeButton.getAttribute('Id').split('-')[1];
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
        generateView(new View01({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-02':
        generateView(new View02({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-03':
        generateView(new View03({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-04':
        generateView(new View04({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-05':
        generateView(new View05({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-06':
        generateView(new View06({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-07':
        generateView(new View07({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-08':
        generateView(new View08({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-09':
        generateView(new View09({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-10':
        generateView(new View10({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-11':
        generateView(new View11({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-12':
        generateView(new View12({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-13':
        generateView(new View13({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      case 'NPB-14':
        generateView(new View14({
            sendDispositionHandler: sendDisposition,
            openClientInfoHandler: openClientInfo,
            goToPreviousViewHandler: goToPreviousView,
            openPopupHandler: openPopup,
            changeFieldValueHandler: changeFieldValue,
            setStateItemHandler: setStateItem
          },
          state));
        break;
      default:
        console.log('Кнопка не найдена.');
    }
    // Внесение изменений в state
    state.previousButton = state.activeButton;
    state.activeButton = button;
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
  state.activeButton = document.querySelector('#NPB-01');

  // Генерация стартовой страницы
  generateView(new View01({
      sendDispositionHandler: sendDisposition,
      openClientInfoHandler: '',
      goToPreviousViewHandler: '',
      openPopupHandler: openPopup,
      changeFieldValueHandler: changeFieldValue,
      setStateItemHandler: setStateItem
    },
    state));

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