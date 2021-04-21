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

  schedule(data) {
    console.log(data);
    const useAltPhoneFlg = data.useAltPhoneFlg;
    const altPhone = data.altPhone;
    const month = data.month;
    const day = data.day;
    const year = data.year;
    const hour = data.hour;
    const minute = data.minute;
    
    // Set up the Scheduled Phone attribute, if selected
    // This sends the scheduled call to a custom phone number, rather than what's in the contact list
    if (useAltPhoneFlg && altPhone) {
      IS_ATTR_SchedPhone.value = altPhone;
    } else {
      IS_ATTR_SchedPhone.value = "";
    }

    IS_Action_CallComplete.AgentId = IS_System_AgentID.value;

    IS_Action_CallComplete.Month = month;
    IS_Action_CallComplete.Day = day;
    IS_Action_CallComplete.Year = year;
    IS_Action_CallComplete.Hour = hour;
    IS_Action_CallComplete.Minute = minute;

    // Set the wrapup code to "Scheduled"
    IS_Action_CallComplete.WrapupCode = "Scheduled";
    IS_Action_CallComplete.abandoned = false;

    // After the CallComplete action completes, go to Available and load index.html
    IS_Action_CallComplete.callback = function (error) {
      if (!error) {
        IS_Action_ClientStatus.statuskey = "Available";
        IS_Action_ClientStatus.click();
        ChangePage("index.html");
      } else {
        IS_Action_Trace.level = 0;
        IS_Action_Trace.message = "Error disposing call. " + error;
        IS_Action_Trace.click();
      }
    }
    // Execute the action.
    IS_Action_CallComplete.click();
    // Удаление карточки звонка
    this._removeCallCard();
  }
}