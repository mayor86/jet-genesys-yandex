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
    
    // Set up the Scheduled Phone attribute, if selected
    // This sends the scheduled call to a custom phone number, rather than what's in the contact list
    if (useCustomNumber.checked) {
        if (customNumber.value == "") {
            document.getElementById("Error").innerText = "Pleaser enter a value phone number.";
            return;
        }

        IS_ATTR_SchedPhone.value = customNumber.value.toString();
    }
    else {
        IS_ATTR_SchedPhone.value = "";
    }

    if (agentowned.checked) {
        IS_Action_CallComplete.AgentId = IS_System_AgentID.value;
    }
    else {
        IS_Action_CallComplete.AgentId = "";
    }
    
    // Grab the scheduled date/time and set the values in the CallComplete action
    var month = document.getElementById("tagMonth");
    var day = document.getElementById("tagDay");
    var hour = document.getElementById("tagHour");
    var ampm = document.getElementById("AMPMSelect");

    hour = hour.options[hour.selectedIndex].value;
    month = month.options[month.selectedIndex].value;
    day = day.options[day.selectedIndex].value;
    
    IS_Action_CallComplete.ampm = ampm.options[ampm.selectedIndex].value;

    IS_Action_CallComplete.Month = month.toString();
    IS_Action_CallComplete.Day = day.toString();
    IS_Action_CallComplete.Year = Year.value.toString();
    IS_Action_CallComplete.Hour = hour.toString();
    IS_Action_CallComplete.Minute = Minute.value.toString();
    
    // Set the wrapup code to "Scheduled"
    IS_Action_CallComplete.WrapupCode = "Scheduled";
    IS_Action_CallComplete.abandoned = false;

    // After the CallComplete action completes, go to Available and load index.html
    IS_Action_CallComplete.callback = function(error) {
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
  }
}