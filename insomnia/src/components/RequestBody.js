import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AceEditor from 'react-ace';
import 'brace/theme/xcode';
import 'brace/mode/json';

const styles = () => ({
  validJSON: {
    border: '1px solid black',
    borderRadius: '2px',
  },
  invalidJSON: {
    border: '1px solid red',
    borderRadius: '2px',
  },
});

/**
 * The editor containing the response of the request
 * @param {Object} data the response object
 * @param {Object} classes material-ui injected styles
 * @param {Function} onChange event handler for text field value changes
 */
class ResponseField extends Component {
  state = {
    error: false,
  };

  render() {
    const { classes, onChange, data } = this.props;
    const { error } = this.state;
    return (
      <div className={error ? classes.invalidJSON : classes.validJSON}>
        <AceEditor
          height="300px"
          width=""
          mode="json"
          theme="xcode"
          onChange={onChange}
          fontSize={14}
          value={data}
          onValidate={msg => this.setState({ error: msg.length > 0 })}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            tabSize: 2,
          }}
        />
      </div>
    );
  }
}

ResponseField.propTypes = {
  data: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(ResponseField);
