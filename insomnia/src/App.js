import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from 'components/pages/HomePage';
import LoginPage from 'components/pages/LoginPage';
import DashboardPage from 'components/pages/DashboardPage';
import SignupPage from 'components/pages/SignupPage';
import GuestRoute from 'components/routes/GuestRoute';

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token,
});

const App = ({ location }) => (
  <div>
    <Route location={location} path="/" exact component={HomePage} />
    <GuestRoute location={location} path="/login" exact component={LoginPage} />
    <GuestRoute
      location={location}
      path="/signup"
      exact
      component={SignupPage}
    />
    <Route
      location={location}
      path="/dashboard"
      exact
      component={DashboardPage}
    />
  </div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(App);
