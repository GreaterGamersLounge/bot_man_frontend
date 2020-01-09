import { LOGIN_USER, LOGOUT_USER } from "../action_types";

const API_URL = "http://localhost:3001/api";

// Action creators
const loginUser = user => ({
  type: LOGIN_USER,
  user
});
const logoutUser = user => ({
  type: LOGOUT_USER,
  user
});

// Action helpers
export const userPostFetch = user => dispatch => {
  return fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      user: {
        ...user
      }
    })
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);

      if (data.errors) {
        alert(JSON.stringify(data.errors));
      } else {
        localStorage.setItem("token", data.user.token);
        dispatch(loginUser(data.user));
      }
    });
};

export const userLogout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(logoutUser());
};

// Initial user state
const initialState = {
  id: null,
  email: "",
  token: localStorage.token
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...action.user };
    case LOGOUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};
export default userReducer;
