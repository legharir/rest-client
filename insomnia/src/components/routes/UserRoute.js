import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
});

const UserRoute = ({
  isAuthenticated,
  component: Component,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default connect(mapStateToProps)(UserRoute);
