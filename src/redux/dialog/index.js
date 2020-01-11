import { UPDATE_DIALOG_OPEN } from "../action_types";

// Action creators
const openDialog = dialog => ({
  type: UPDATE_DIALOG_OPEN,
  dialog
});

// Initial dialog state
const initialState = {
  open: false,
  object: {
    title: "",
    content: null
  }
};

// Action helpers
export const updateDialog = (open, object) => dispatch => {
  const dialog = object == null ? initialState.object : object;
  dispatch(openDialog({ open, object: dialog }));
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
