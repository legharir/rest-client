import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { logout } from 'actions/auth';
import {
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  Button,
} from '@material-ui/core';
import { PlayCircleOutline, PowerSettingsNew } from '@material-ui/icons';

const drawerWidth = 240;

const styles = theme => ({
  title: {
    padding: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    color: 'white',
    justifyContent: 'space-between',
  },
  titleText: {
    paddingTop: theme.spacing.unit,
    color: 'white',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

class AppDrawer extends Component {
  state = {
    loggedOut: false,
  };

  render() {
    const { classes, populateTemplateRequest } = this.props;
    const { loggedOut } = this.state;

    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        {loggedOut && <Redirect to="/login" />}
        <div className={classes.title}>
          <Typography className={classes.titleText} variant="h5">
            Woke
          </Typography>
          <Button
            className={classes.titleText}
            onClick={() => {
              this.props.logout();
              this.setState({ loggedOut: true });
            }}
          >
            <PowerSettingsNew />
          </Button>
        </div>
        <Divider />
        <List>
          {['Saved Tests', 'GET Chuck Norris'].map((text, index) => (
            <ListItem
              button
              key={text}
              onClick={() => populateTemplateRequest(text)}
            >
              {index > 0 && <PlayCircleOutline />}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line
  logout: PropTypes.func.isRequired,
  populateTemplateRequest: PropTypes.func.isRequired,
};

export default _.flow(
  connect(
    null,
    { logout },
  ),
  withStyles(styles),
)(AppDrawer);
