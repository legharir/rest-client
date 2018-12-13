import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import Validator from 'validator';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Avatar from '@material-ui/core/Avatar';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import ErrorIcon from '@material-ui/icons/Error';
import withStyles from '@material-ui/core/styles/withStyles';
import grey from '@material-ui/core/colors/grey';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: theme.spacing.unit * 8,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  snackbar: {
    backgroundColor: theme.palette.error.dark,
    marginBottom: theme.spacing.unit * 2,
  },
  icon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit,
  },
  buttonProgress: {
    marginLeft: theme.spacing.unit,
    color: grey[50],
  },
});

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value },
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (isEmpty(errors)) {
      this.setState({
        loading: true,
      });
      this.props.submit(this.state.data).catch(err =>
        this.setState({
          errors: err.response.data.errors || {
            global: 'An error occured.',
          },
          loading: false,
        }),
      );
    }
  };

  validate = data => {
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    const { classes } = this.props;
    const { data, errors, loading } = this.state;

    return (
      <main className={classes.layout}>
        {errors.global && (
          <SnackbarContent
            className={classes.snackbar}
            message={
              <span id="login-error-message" className={classes.message}>
                <ErrorIcon className={classes.icon} />
                {errors.global}
              </span>
            }
          />
        )}
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="h6">Login</Typography>
          <form onSubmit={this.onSubmit} className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel error={errors.email} htmlFor="email">
                Email Address
              </InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                value={data.email}
                error={errors.email}
                disabled={loading}
                onChange={this.onChange}
                autoFocus
              />
              <FormHelperText hidden={!errors.email} error>
                {errors.email}
              </FormHelperText>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel error={errors.password} htmlFor="password">
                Password
              </InputLabel>
              <Input
                id="password"
                name="password"
                autoComplete="current-password"
                type="password"
                value={data.password}
                error={errors.password}
                disabled={loading}
                onChange={this.onChange}
              />
              <FormHelperText hidden={errors.password} error>
                {errors.password}
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
              {loading && (
                <CircularProgress
                  size={20}
                  className={classes.buttonProgress}
                />
              )}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
