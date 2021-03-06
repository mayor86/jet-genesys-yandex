class View {
  constructor(handler) {
    this._workspace = document.querySelector('.workspace');
    this._footerPanel = document.querySelector('.footer-panel');
    this._callResultPanel = document.querySelector('.call-result-panel');

    this._callResultHandler = handler.sendDispositionHandler;
    this._clientInfoHandler = handler.openClientInfoHandler;
    this._backButtonHandler = handler.goToPreviousViewHandler;
    this._callBackButtonHandler = handler.openPopupHandler;
    this._changeFieldValueHandler = handler.changeFieldValueHandler;
    this._setStateItemHandler = handler.setStateItemHandler;
    this._sendLPRDataHandler = handler.sendLPRDataHandler;
    this._placeHandler = handler.placeHandler;
  }

  generateWorkspace() {
    return this._workspaceElement;
  }

  generateFooterPanel() {
    return this._footerPanelElement;
  }

  generateCallResultPanel() {
    return this._callResultPanelElement;
  }

}