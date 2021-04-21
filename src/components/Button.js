class Button {
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

  generate(item) {
    this._button = this._getTemplate();
    
    this._button.setAttribute('id', item.id);
    if (typeof item.caption !== 'undefined') {
      this._button.textContent = item.caption;
    }
    if (typeof item.class !== 'undefined') {
      this._button.setAttribute('class', item.class);
    }

    if (typeof item.disabled !== 'undefined') {
      this._button.setAttribute('disabled', item.disabled);
    }

    if (typeof item.src !== 'undefined') {
      this._button.querySelector('img').setAttribute('src', item.src);
    }

    this._setEventListeners();

    return this._button;
  }

  _setEventListeners() {
    this._button.addEventListener('click', () => {
      this._buttonClickHandler(this._button);
    });
  }
}