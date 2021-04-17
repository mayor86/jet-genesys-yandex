class Api {
  constructor(handler) {
    this._removeCallCard = handler.removeCallCardHandler;
  }
  sendDisposition(disposition) {
    try {
      // Disconnect the call.
      IS_Action_Disconnect.click();
      IS_Action_CallComplete.wrapupcode = disposition;
      // Assign a callback to be invoked after the IS_Action_CallComplete action has been executed.
      IS_Action_CallComplete.callback = function (error) {
        if (error) {
          // The IS_Action_CallComplete action failed, log an error.
          IS_Action_Trace.message = "The disposition failed.";
          IS_Action_Trace.level = 0;
          IS_Action_Trace.click();
        } else {
          // The disposition was successful. Set the agent back to available.
          IS_Action_ClientStatus.statuskey = "Available";
          IS_Action_ClientStatus.click();
        }
      }
      // Execute the action.
      IS_Action_CallComplete.click();
      // Удаление карточки звонка
      this._removeCallCard();
    } catch (e) {
      console.log('Ошибка при выполнении функции sendDisposition' + e);
    }
  }
}