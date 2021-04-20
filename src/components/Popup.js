class Popup {
  constructor(handler, popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
    this._cancelButton = this._popup.querySelector('.popup__cancel-button');
    this._submitButton = this._popup.querySelector('.popup__submit-button');
    this._form = this._popup.querySelector('.popup__container');
    this._altPhoneFlg = this._popup.querySelector('#use-alt-phone-flg-input');
    this._altPhone = this._popup.querySelector('#alt-phone-input');
    this._plannedDate = this._popup.querySelector('#planned-date-input');
    this._plannedHours = this._popup.querySelector('#planned-hours-input');
    this._plannedMinutes = this._popup.querySelector('#planned-minutes-input');
    this._error = this._popup.querySelector('.popup__error');

    this._scheduleHandler = handler.scheduleHandler;
  }

  open() {
    this._popup.classList.add('popup_opened');
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._altPhone.classList.remove('popup__input-el_opened');
    this._error.innerHTML = '';
    this._form.reset();
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });

    this._cancelButton.addEventListener('click', () => {
      this.close();
    });

    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();

      this._submitFormHandler();
    })

    this._altPhoneFlg.addEventListener('click', () => {
      this._isAltPhoneToggle();
    })
  }

  _submitFormHandler(evt) {
    try {
      this._scheduleHandler({
        useAltPhoneFlg: this._altPhoneFlg.checked,
        altPhone: this._altPhone.value,
        month: this._plannedDate.value.split('-')[1],
        day: this._plannedDate.value.split('-')[2],
        year: this._plannedDate.value.split('-')[0],
        hour: this._plannedHours.value,
        minute: this._plannedMinutes.value
      });

      this.close();
    } catch (e) {
      this._error.innerHTML = `Ошибка: ${e}`;
    }
  }

  _isAltPhoneToggle() {
    this._altPhone.classList.toggle('popup__input-el_opened');
  }
}