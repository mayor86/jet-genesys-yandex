export default class Form {
  constructor (data, formSelector) {
    this._formSelector = formSelector;
    console.log(data)
    this._text = data.quote;
  }

  _getTemplate() {
    const formElement = document
      .querySelector(this._formSelector)
      .content
      .querySelector('.form')
      .cloneNode(true);
      
    return formElement;
  }

  generateForm() {
    this._element = this._getTemplate();
    this._formTitle = this._element.querySelector('.form__title');
    this._formInput = this._element.querySelector('.form__input-el');
    this._formTitle.textContent = this._text; 
    this._formInput.value = this._text;
    
    return this._element;
  }

}