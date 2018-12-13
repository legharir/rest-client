import authTypes from '../src/constants/authTypes';
import utils from '../src/utils/utils';

test('correctly adds BASIC authorization to header', () => {
  const auth = {
    authType: authTypes.BASIC,
    user: 'username',
    pass: 'password',
    token: '',
    tokenPrefix: 'Bearer',
  };
  const based = Buffer.from(`${auth.user}:${auth.pass}`).toString('base64');
  const headerWithAuth = utils.addAuthToHeader([[]], auth);
  expect(headerWithAuth).toEqual({ Authorization: based });
});

test('correctly adds BEARER authorization to header', () => {
  const auth = {
    authType: authTypes.BEARER,
    user: '',
    pass: '',
    token: 'secrettoken',
    tokenPrefix: 'Bearer',
  };
  const value = `${auth.tokenPrefix} ${auth.token}`;
  const headerWithAuth = utils.addAuthToHeader([[]], auth);
  expect(headerWithAuth).toEqual({ Authorization: value });
});

test('correcty tests if input string is valid JSON', () => {
  const validJsonString = '{"key": "value"}';
  const invalidJsonString = '{{}';
  expect(utils.isValidJSON(validJsonString)).toBeTruthy();
  expect(utils.isValidJSON(invalidJsonString)).toBeFalsy();
});
