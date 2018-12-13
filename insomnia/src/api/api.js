import axios from 'axios';
import utils from 'utils/utils';
import authTypes from '../constants/authTypes';

export default {
  request: {
    /**
     * Sends a request with the specificied parameters as configuration
     * @param {String} method any one of 'GET' or 'PUT'
     * @param {String} url the base request URL
     * @param {Object} params the query parameters specified as key value pairs
     * @param {Object} headerWithoutAuth the header of the request, without authorization
     * @param {Object} auth contains the user, pass, and token keys and values
     * @param {Object} data contains the response body
     */
    send: (method, url, params, headerWithoutAuth, auth, data) => {
      let headers = { ...headerWithoutAuth };
      if (auth.authType !== authTypes.NONE) {
        headers = utils.addAuthToHeader(headers, auth);
      }
      return axios({ method, url, params, headers, data });
    },
  },
  user: {
    /**
     * Attempt to login with the specified credentials
     * @param {Object} credentials object containing the username and password of the user
     */
    login: credentials =>
      axios.post('api/auth', { credentials }).then(res => res.data.user),

    /**
     * Sign up with the specified user
     * @param {Object} user contains the username and password of the new user
     */
    signup: user =>
      axios.post('api/users', { user }).then(res => res.data.user),
  },
};
