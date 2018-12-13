import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token,
});

const HomePage = ({ isAuthenticated }) =>
  isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/signup" />;

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(HomePage);
