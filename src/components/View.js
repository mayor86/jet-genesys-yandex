export default class View {
  constructor(handler) {
    this._workspace = document.querySelector('.workspace');
    this._footerPanel = document.querySelector('.footer-panel');
    this._callResultPanel = document.querySelector('.call-result-panel');

    this._callResultHandler = handler.callResultButtonClickHandler;
    this._clientInfoHandler = handler.clientInfoButtonClickHandler;

  }

}