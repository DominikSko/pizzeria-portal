import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './PageNav.scss';
import Button from '@material-ui/core/Button';

const PageNav = () => {
  return (
    <nav className={styles.component} >
      <NavLink to={`${process.env.PUBLIC_URL}/home`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
        <Button className="buttonNavBar" variant="outlined" size="large" style={{ marginRight: '4px'}}>
          Home
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button variant="outlined" size="large" style={{ marginRight: '4px'}}>
          Login
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button  variant="outlined" size="large" style={{ marginRight: '4px'}}>
          Tables
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button  variant="outlined" size="large" style={{ marginRight: '4px'}}>
          Waiter
        </Button>
      </NavLink>
      <NavLink to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' style={{ textDecoration: 'none', color: '#383A42', textAlign: 'right'}}>
      <Button variant="outlined" size="large" style={{ marginRight: '4px'}}>
          Kitchen
        </Button>
      </NavLink>
    </nav>
  );
};

  export default PageNav;