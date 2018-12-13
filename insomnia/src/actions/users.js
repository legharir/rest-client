import api from "api/api";
import { userLoggedIn } from "actions/auth";

export const signup = data => dispatch =>
  api.user.signup(data).then(user => dispatch(userLoggedIn(user)));
