class Api {
  constructor(handler){
    this._destroyApp = handler.destroyApp;
  }
  sendDisposition(disposition) {
    console.log('sendDisposition >>');
    this._destroyApp();
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

    this._destroyApp;
  }
}