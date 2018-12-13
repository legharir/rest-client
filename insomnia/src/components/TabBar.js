import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import tabs from '../constants/tabs';

/**
 * Tab bar that allows the user to further configure the query (headers, params, etc)
 * @param {Number} value The index of the selected tab
 * @param {Function} onChange Event handler for tab changes
 */
const TabBar = ({ value, onChange }) => (
  <div>
    <AppBar position="static">
      <Tabs value={value} onChange={onChange}>
        {tabs.map(tab => (
          <Tab key={tab} label={tab} />
        ))}
      </Tabs>
    </AppBar>
  </div>
);

TabBar.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TabBar;
