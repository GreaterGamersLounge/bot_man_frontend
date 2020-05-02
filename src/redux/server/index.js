import { LOAD_SERVERS } from "../action_types";
import { API_URL } from "../../components/config";

// Action creators
const loadServers = (servers) => ({
  type: LOAD_SERVERS,
  servers,
});

// Action helpers
export const loadAvailableServers = () => (dispatch) => {
  const token = localStorage.token;

  if (token) {
    return fetch(`${API_URL}/stats/servers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.servers);

        dispatch(loadServers(data.servers));
      });
  }
};

// Initial dialog state
const initialState = {
  servers: [],
};

const serverReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SERVERS:
      return { ...action };
    default:
      return state;
  }
};
export default serverReducer;
