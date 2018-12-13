import authTypes from '../constants/authTypes';

export default {
  addAuthToHeader: (headerWithoutAuth, auth) => {
    const header = {};
    let value = '';
    switch (auth.authType) {
      case authTypes.BASIC:
        value = `${Buffer.from(`${auth.user}:${auth.pass}`).toString(
          'base64',
        )}`;
        break;
      case authTypes.BEARER:
        value = `${auth.tokenPrefix} ${auth.token}`;
        break;
      default:
        value = '';
        break;
    }
    header.Authorization = value;
    return header;
  },
  isValidJSON: str => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },
  toObject: keyValuePairs =>
    keyValuePairs.reduce((allPairs, [key, value]) => {
      allPairs[key] = value;
      return allPairs;
    }, {}),
};
