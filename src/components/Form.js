export default class Form {
  constructor (formSelector) {
    this._formSelector = formSelector;
  }

  _getTemplate() {
    const formElement = document
      .querySelector(this._formSelector)
      .content
      .querySelector('.navigation-panel__button')
      .cloneNode(true);
    
    return formElement;
  }

  generateForm(item) {
    this._element = this._getTemplate();
    this._element.textContent = item.buttonCaption;
    this._element.setAttribute('id', item.buttonId);
    
    return this._element;
  }

}