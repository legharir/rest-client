import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

const GuestRoute = ({
  isAuthenticated,
  component: Component,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />
    }
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(GuestRoute);
