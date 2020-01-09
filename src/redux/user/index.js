import { LOGIN_USER, LOGOUT_USER } from "../action_types";

const URL = "http://localhost:3001";
const API_URL = `${URL}/api`;

// Action creators
const loginUser = user => ({
  type: LOGIN_USER,
  user
});
const logoutUser = () => ({
  type: LOGOUT_USER
});

// Action helpers
export const userLogin = user => dispatch => {
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
        // TODO: Actually show a dialog here for the errors
        alert(JSON.stringify(data.errors));
      } else {
        localStorage.setItem("token", data.user.token);

        // TODO: remove this after real token verification is
        // happening on initial page load
        // This is just here for testing of the route/method.
        dispatch(userCheckToken(data.user.token));

        dispatch(loginUser(data.user));
      }
    });
};

export const userLogout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(logoutUser());
};

export const userCheckToken = token => dispatch => {
  return fetch(`${URL}/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(resp => resp.json())
    .then(data => {
      console.log(data);

      if (data.id) {
        // The user token is valid
        // TODO: set the reset of the user state here correctly,
        // since all we have currently is the token.
      } else {
        // The user token is invalid
        dispatch(userLogout());
      }
    });
};

// Initial user state
const initialState = {
  id: null,
  email: "",
  isSignedIn: false,
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
