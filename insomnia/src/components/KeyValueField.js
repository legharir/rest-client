import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, TextField } from '@material-ui/core';

const styles = theme => ({
  textField: {
    marginRight: theme.spacing.unit * 2,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
});

const KeyValueField = ({
  index,
  keyField,
  valueField,
  keyPlaceholder,
  valuePlaceholder,
  onChange,
  classes,
  addKeyValueField,
  removeKeyValueField,
}) => (
  <div className={classes.container}>
    <TextField
      className={classes.textField}
      placeholder={keyPlaceholder}
      value={keyField}
      margin="normal"
      onChange={e => onChange(index, 0, e.target.value)}
    />
    <TextField
      className={classes.textField}
      placeholder={valuePlaceholder}
      value={valueField}
      margin="normal"
      onChange={e => onChange(index, 1, e.target.value)}
    />
    <IconButton
      className={classes.button}
      color="primary"
      onClick={() => addKeyValueField(index)}
    >
      <AddIcon />
    </IconButton>
    <IconButton
      className={classes.button}
      color="secondary"
      onClick={() => removeKeyValueField(index)}
    >
      <DeleteIcon />
    </IconButton>
  </div>
);

KeyValueField.propTypes = {
  index: PropTypes.number.isRequired,
  keyField: PropTypes.string,
  valueField: PropTypes.string,
  keyPlaceholder: PropTypes.string.isRequired,
  valuePlaceholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  addKeyValueField: PropTypes.func.isRequired,
  removeKeyValueField: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KeyValueField);
