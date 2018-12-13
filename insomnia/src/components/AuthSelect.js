import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Select, MenuItem, OutlinedInput, TextField } from '@material-ui/core';
import authTypes from '../constants/authTypes';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    maxWidth: 200,
  },
  textFieldLong: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    maxWidth: 400,
  },
});

/**
 * Select containing the authentication schemes the user can choose from
 * @param {Object} classes injected JSS styles from Material-UI
 * @param {Function} onChange event handler for auth select and auth field changes
 * @param {Object} auth containins the authType, username, password, and authtoken
 */
const AuthSelect = ({ classes, onChange, auth }) => (
  <div className={classes.container}>
    <Select
      className={classes.textField}
      value={auth.authType}
      onChange={onChange}
      input={<OutlinedInput name="authType" id="auth-type" labelWidth={0} />}
    >
      {Object.keys(authTypes).map(authType => (
        <MenuItem key={authType} value={authTypes[authType]}>
          {authTypes[authType]}
        </MenuItem>
      ))}
    </Select>
    {auth.authType === authTypes.BASIC && (
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          id="username"
          label="Username"
          name="user"
          value={auth.user}
          onChange={onChange}
          variant="outlined"
        />
        <TextField
          className={classes.textField}
          id="password"
          label="Password"
          name="pass"
          type="password"
          value={auth.pass}
          onChange={onChange}
          variant="outlined"
        />
      </div>
    )}
    {auth.authType === authTypes.BEARER && (
      <div className={classes.container}>
        <TextField
          className={classes.textField}
          id="token-prefix"
          label="Prefix"
          name="tokenPrefix"
          value={auth.tokenPrefix}
          onChange={onChange}
          variant="outlined"
        />
        <TextField
          className={classes.textFieldLong}
          id="token"
          label="Token"
          name="token"
          value={auth.token}
          onChange={onChange}
          variant="outlined"
        />
      </div>
    )}
  </div>
);

AuthSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  auth: PropTypes.shape({
    authType: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(AuthSelect);
