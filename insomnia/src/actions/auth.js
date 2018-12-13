import api from "api/api";
import * as actions from "constants/actions";

export const userLoggedIn = user => ({
  type: actions.USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: actions.USER_LOGGED_OUT
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.appJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("appJWT");
  dispatch(userLoggedOut());
};
