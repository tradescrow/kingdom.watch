import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import Box from '@mui/material/Box';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function createData(timestamp: string, details: string) {
  return { timestamp, details };
}

const rows = [
  createData(
    '2021.11.16 21:00 CET',
    'Added heroes with floor price to the personal page'
  ),
  createData(
    '2021.11.11 17:09 CET',
    'Changed the timespan of the Bank APR from 168 hours (1 week) to 31 days'
  ),
  createData(
    '2021.11.10 10:30 CET',
    'Remove the menu link for the old pools page. Page still available through old bookmarked links'
  ),
  createData(
    '2021.11.08 20:53 CET',
    'Add Top 10 Greatest Tear Pulls to Quest landing page'
  ),
  createData(
    '2021.10.31 13:54 CET',
    'Dark mode is available if your OS/mobile/browser theme is set to dark mode'
  ),
];

function About() {
  return (
    <Container>
      <Container>
        <Typography variant="h4" gutterBottom component="div">
          Highlights
        </Typography>

        <List sx={{ listStyleType: 'disc' }} dense>
          <ListItem
            sx={{ display: 'list-item', textAlign: 'center' }}
            alignItems="center"
            disablePadding
          >
            Added Hero Floor prices to the Personal page
          </ListItem>
          <ListItem
            sx={{ display: 'list-item', textAlign: 'center' }}
            alignItems="center"
            disablePadding
          >
            Dark mode is available if your OS/mobile/browser theme is set to
            dark mode
          </ListItem>
        </List>

        <Typography variant="h4" gutterBottom component="div">
          Recent changes
        </Typography>
      </Container>

      <TableContainer component={Box} sx={{ border: 1, borderRadius: 1 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.timestamp}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.timestamp}
                </TableCell>
                <TableCell align="left">{row.details}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default About;
