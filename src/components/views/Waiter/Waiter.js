import React from 'react';
import styles from './Waiter.scss';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import { Table, TableHead, TableRow, TableCell, TableBody, TableFooter } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#92A1E0',
    },
  },
});

const Waiter = () => {
  return (
    <Paper className={styles.component}>
      <ThemeProvider theme={theme}>
      <Table>
      <TableHead style={{ background: '#5D6CA8' }}>
        <div className={styles.component}>
          <h2> Waiter view</h2>
            <Button variant='outlined' size='small' color='secondary'>
              <Link to={process.env.PUBLIC_URL + '/waiter/new'}>New Order</Link>
            </Button>
            <Link to={process.env.PUBLIC_URL + '/waiter/order/123abc'}>Orders</Link>
        </div>
        </TableHead>
        </Table>
      </ThemeProvider>
    </Paper>
  );
};

export default Waiter;