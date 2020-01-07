const BASE_URL = "http://localhost:3001/api";

export const userPostFetch = user => {
  console.log(user);

  return dispatch => {
    return fetch(`${BASE_URL}/users/login`, {
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
};

const loginUser = userObj => ({
  type: "LOGIN_USER",
  payload: userObj
});
