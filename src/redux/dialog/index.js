import { UPDATE_DIALOG_OPEN } from "../action_types";

// Action creators
const openDialog = dialog => ({
  type: UPDATE_DIALOG_OPEN,
  dialog
});

// Action helpers
export const updateDialog = (open, object) => dispatch => {
  if (object == null) {
    object=initialState.object
  }
  dispatch(openDialog({open, object}));
}

// Initial dialog state
const initialState = {
  open: false,
  object: {
    title: "",
    content:null
  }
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DIALOG_OPEN:
      return { ...action.dialog };
    default:
      return state;
  }
};
export default dialogReducer;
