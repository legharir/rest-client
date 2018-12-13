import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import RequestTypeSelect from './RequestTypeSelect';

const styles = theme => ({
  container: {
    display: 'flex',
  },
  button: { margin: theme.spacing.unit * 2 },
});

/**
 * URL bar containing the URL of the request
 * @param {Object} classes Material-UI injected styles.
 * @param {Function} onSend Callback issued when the request is sent
 * @param {Function} onChange Event handler for URL bar input changes
 * @param {String} method The type of HTTP method, one of "GET" or "POST"
 */
const UrlBar = ({ classes, onSend, onChange, method, url }) => (
  <div className={classes.container}>
    <RequestTypeSelect onChange={onChange} methodType={method} />
    <TextField
      className={classes.url}
      id="outlined-url-input"
      label="URL"
      name="url"
      value={url}
      margin="normal"
      variant="outlined"
      size="large"
      fullWidth
      onChange={onChange}
    />
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      onClick={onSend}
      size="small"
    >
      Send
    </Button>
  </div>
);

UrlBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
};

export default withStyles(styles)(UrlBar);
