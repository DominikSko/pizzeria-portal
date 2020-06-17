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

const rows = [
  { id: 1, tableId: '2', number: '1', name: 'ORDER', status: 'READY', orderTime: '13:00', summary: '50' },
  { id: 2, tableId: '1', number: '2', name: 'ORDER', status: 'DELIVERED', orderTime: '09:00', summary: '35' },
  { id: 3, tableId: '3', number: '3', name: 'ORDER', status: 'DONE', orderTime: '11:30', summary: '1000' },
  { id: 4, tableId: '2', number: '4', name: 'ORDER', status: 'CANCELLED', orderTime: '14:00', summary: '100' },
  { id: 5, tableId: '2', number: '6', name: 'ORDER', status: 'READY', orderTime: '16:00', summary: '500' },
  { id: 6, tableId: '3', number: '7', name: 'ORDER', status: 'DONE', orderTime: '18:30', summary: '350' },
  { id: 7, tableId: '2', number: '4', name: 'ORDER', status: 'CANCELLED', orderTime: '14:00', summary: '100' },
  { id: 8, tableId: '2', number: '6', name: 'ORDER', status: 'READY', orderTime: '16:00', summary: '500' },
  { id: 9, tableId: '3', number: '7', name: 'ORDER', status: 'DONE', orderTime: '18:30', summary: '350' },
];

const Order = () => {
  return (
    <Paper className={styles.component}>
      <ThemeProvider theme={theme}>
        <Table>
          <TableHead style={{ background: '#5D6CA8' }}>
            <TableRow>
              <TableCell>
                <Button variant="contained" color="secondary" size="large"  >
                  <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }} >New Order</Link>
                </Button> <Button variant="contained" color="secondary" size="large"  >
                  <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }} >Change Order</Link>
                </Button>
              </TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">TABLE NUMBER</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">ORDER NUMBER</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">STATUS</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">ORDER TIME</TableCell>
              <TableCell style={{ color: '#FFFFFF' }} align="center">SUMMARY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} style={`${row.status}` === 'READY' ? { background: '#6FEBB0' } : { background: '#659694' }}>
                <TableCell align="left">
                  <Button variant="contained" color="primary" size="small">
                    <Link to={process.env.PUBLIC_URL + '/waiter/order/123abc'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>
                      {row.name}
                    </Link>
                  </Button> {`${row.status}` !== 'DONE' && `${row.status}` !== 'CANCELLED' && `${row.status}` ?
                    <Button variant="contained" color="secondary" size="small" >
                      <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>DETAILS</Link>
                    </Button>
                    : (null)} {`${row.status}` === 'READY' ?
                      <Button variant="contained" color="secondary" size="small">
                        <Link to={process.env.PUBLIC_URL + '/waiter/new'} style={{ textDecoration: 'none', color: '#FFFFFF' }}>CHANGE TO 'DELIVERED'</Link>
                      </Button>
                      : (null)}
                </TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.tableId}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.number}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.status}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.orderTime}`}</TableCell>
                <TableCell align="center" style={{ color: '#FFFFFF' }}>{`${row.summary}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter style={{ background: '#5D6CA8' }} >
            <TableRow>
              <TableCell>
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>LOGOUT</Button>
              </TableCell>
              <TableCell align="center">
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>TRANSFER TABLE</Button>
              </TableCell>
              <TableCell align="center">
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>RECEIPTS</Button>
              </TableCell >
              <TableCell>
              </TableCell>
              <TableCell align="center" style={{ color: '#FFFFFF', fontSize: '13px' }}>TABLE AVERAGE TIME: 32 MIN</TableCell >
              <TableCell align="center">
                <Button color="secondary" variant="contained" size="large" style={{ color: '#FFFFFF' }}>TIPS</Button>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </ThemeProvider>
    </Paper>

  );
};

export default Order;