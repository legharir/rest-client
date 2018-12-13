import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem, OutlinedInput } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import methods from '../constants/methods';

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 2,
  },
});

/**
 * Select containing all possible request types
 * @param {Object} classes Material-UI injected classes
 * @param {Function} onChange event handler for select changes
 * @param {Boolean} methodType the type of method: "GET" or "POST"
 */
const RequestTypeSelect = ({ classes, methodType, onChange }) => (
  <Select
    className={classes.container}
    value={methodType}
    onChange={onChange}
    input={<OutlinedInput name="method" id="method-type" labelWidth={0} />}
  >
    {Object.keys(methods).map(method => (
      <MenuItem key={methods[method]} value={methods[method]}>
        {method}
      </MenuItem>
    ))}
  </Select>
);

RequestTypeSelect.propTypes = {
  classes: PropTypes.object.isRequired,
  methodType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(RequestTypeSelect);
