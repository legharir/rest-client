import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  visualPreview: {
    height: '100%',
    width: '100%',
    border: '1px solid black',
  },
});

/**
 * Textfield containing the response of the request
 * @param {String} response the repsonse of the request
 * @param {Boolean} error true if there was an error with the request, false otherwise
 */
const VisualPreview = ({ classes, url }) => (
  <webview src={url} className={classes.visualPreview} title="Visual Preview" />
);

VisualPreview.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  url: PropTypes.string.isRequired,
};

export default withStyles(styles)(VisualPreview);
