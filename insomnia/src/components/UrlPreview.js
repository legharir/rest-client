import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

class UrlPreview extends Component {
  urlPreviewText = () => {
    const par = this.props.params;
    let runStr = this.props.urlBase;

    if (runStr === '') {
      return runStr;
    }
    if (runStr.substr(0, 7) !== 'http://' && runStr.substr(0, 8) !== 'https://')
      runStr = `http://${runStr}`;

    if (runStr !== 'http://' && runStr !== 'https://') runStr += '/';

    par.forEach(([key, val], index) => {
      if (key !== undefined && val !== undefined) {
        if (index !== 0) {
          runStr += '&';
        } else {
          runStr += '?';
        }
        runStr += `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
      }
    });
    return runStr;
  };

  render() {
    return (
      <TextField
        inputProps={{
          readOnly: true,
          disabled: true,
        }}
        fullWidth
        label="URL PREVIEW"
        value={this.urlPreviewText()}
        margin="normal"
        variant="outlined"
      />
    );
  }
}

UrlPreview.propTypes = {
  params: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  urlBase: PropTypes.string.isRequired,
};

export default UrlPreview;
