import { GET_QUOTE_LIST } from "../action_types";
import { URL, API_URL } from "../../components/config";
import axios from "axios";

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
  axios.get(`${API_URL}/users/login`, response => {
    dispatch(getQuotes(response.data));
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
