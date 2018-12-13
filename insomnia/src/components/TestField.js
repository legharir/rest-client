import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Icon } from '@material-ui/core';
import AceEditor from 'react-ace';
import 'brace/theme/xcode';
import 'brace/mode/javascript';

const styles = theme => ({
  passed: {
    border: '3px solid lightgreen',
    borderRadius: '2px',
  },
  failed: {
    border: '3px solid red',
    borderRadius: '2px',
  },
  neutral: {
    border: '3px solid black',
    borderRadius: '2px',
  },
  button: {
    marginTop: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

/**
 * Editor in which the user inputs the test to perform on the query.
 * @param {String} test The string representing the test
 * @param {Function} onChange Event handler for the
 */
class TestField extends Component {
  state = {};

  getClass = testPassed => {
    if (testPassed === 0) {
      return 'neutral';
    }
    if (testPassed === 1) {
      return 'passed';
    }
    return 'failed';
  };

  render() {
    const {
      classes,
      onChange,
      test,
      runTest,
      testResult,
      resetTestResult,
    } = this.props;
    return (
      <div>
        <div className={classes[this.getClass(testResult)]}>
          <AceEditor
            height="150px"
            width=""
            mode="javascript"
            theme="xcode"
            onChange={newTest => {
              onChange(newTest);
              resetTestResult();
            }}
            fontSize={14}
            value={test}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              tabSize: 2,
            }}
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          onClick={runTest}
          className={classes.button}
        >
          Run Test
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </div>
    );
  }
}

TestField.propTypes = {
  onChange: PropTypes.func.isRequired,
  resetTestResult: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
  runTest: PropTypes.func.isRequired,
  testResult: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired, // eslint-disable-line
};

export default withStyles(styles)(TestField);
