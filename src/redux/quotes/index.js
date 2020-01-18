import { GET_QUOTE_LIST } from "../action_types";
import { URL, API_URL } from "../../components/config";

// Action creators
const getQuotes = quote => ({
  type: GET_QUOTE_LIST,
  quote
});

// Initial dialog state
const initialState = {
  quoteList: []
};

// Action helpers
export const getQuoteList = () => dispatch => {
  fetch(`${URL}/quotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then(data => {
      dispatch(
        getQuotes({
          ...data
        })
      );
    });
};

const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTE_LIST:
      return { ...action.dialog };
    default:
      return state;
  }
};
export default quoteReducer;
