import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please fill all fields",
    };
  }
  throw new Error(`no such action ${action.type}`);
};

export default reducer;
