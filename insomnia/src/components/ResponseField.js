import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

/**
 * Textfield containing the response of the request
 * @param {String} response the repsonse of the request
 * @param {Boolean} error true if there was an error with the request, false otherwise
 */
const ResponseField = ({ response, error }) => (
  <TextField
    error={error}
    name="response"
    label="Reponse"
    fullWidth
    multiline
    variant="outlined"
    rows={15}
    InputLabelProps={{
      shrink: true,
    }}
    value={response}
  />
);

ResponseField.propTypes = {
  response: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ResponseField;
