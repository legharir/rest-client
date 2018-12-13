const ins = {
  expect: actual => ({
    includes: expected => actual.includes(expected),
  }),
  contains: (expected, actual) => actual.includes(expected),
  response: () => this.response,
};

export default ins;
