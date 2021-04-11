export default class NavigationButton {
  constructor(buttonSelector, handler) {
    this._buttonSelector = buttonSelector;
    this._buttonClickHandler = handler.buttonClickHandler;
  }

  _getTemplate() {
    const buttonElement = document
      .querySelector(this._buttonSelector)
      .content
      .querySelector('.navigation-panel__button')
      .cloneNode(true);

    return buttonElement;
  }

  generateButton(item) {
    this._button = this._getTemplate();
    this._button.textContent = item.buttonCaption;
    this._button.setAttribute('id', item.buttonId);
    this._setEventListeners();

    return this._button;
  }

  _setEventListeners() {
    this._button.addEventListener('click', () => {
      this._buttonClickHandler(this._button);
    });
  }
}