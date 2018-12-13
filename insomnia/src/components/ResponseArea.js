import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ResponseField from 'components/ResponseField';
import VisualPreview from 'components/VisualPreview';
import { FormControlLabel, Switch } from '@material-ui/core';

const styles = () => ({
  responseContainer: {
    height: 360,
    flexGrow: 1,
  },
  switch: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class ResponseArea extends Component {
  state = {
    showVisualPreview: false,
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.checked });

  render() {
    const { classes, error, response, url } = this.props;
    const { showVisualPreview } = this.state;

    return (
      <div className={classes.responseContainer}>
        <div className={classes.switch}>
          {response &&
            !error && (
              <FormControlLabel
                control={
                  <Switch
                    name="showVisualPreview"
                    color="primary"
                    checked={this.state.showVisualPreview}
                    onChange={this.handleChange}
                  />
                }
                label="Webview"
              />
            )}
        </div>
        <div className={classes.responseContainer}>
          {response && !error && showVisualPreview ? (
            <VisualPreview url={url} />
          ) : (
            <ResponseField error={error} response={response} />
          )}
        </div>
      </div>
    );
  }
}

ResponseArea.propTypes = {
  response: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ResponseArea);
