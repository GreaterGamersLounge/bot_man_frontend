import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "../user";
import dialogReducer from "../dialog";
import quoteReducer from "../quotes";

export default history =>
  combineReducers({
    router: connectRouter(history),
    user: userReducer,
    dialog: dialogReducer,
    quotes: quoteReducer
  });
