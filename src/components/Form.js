export default class Form {
  constructor (formSelector) {
    this._formSelector = formSelector;
  }

  _getBtnTemplate() {
    const formElement = document
      .querySelector(this._formSelector)
      .content
      .querySelector('.navigation-panel__button')
      .cloneNode(true);
    
    return formElement;
  }

  generateBtnForm(item) {
    this._element = this._getBtnTemplate();
    this._element.textContent = item.buttonCaption;
    this._element.setAttribute('id', item.buttonId);
    
    return this._element;
  }

}