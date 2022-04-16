import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Footer() {
  return (
    <Container sx={{ paddingTop: '3rem !important' }}>
      <Typography variant="subtitle1" gutterBottom component="div">
        Please contact <strong>Magg</strong> in the DFK Discord or use the{' '}
        <Link href="/feedback" color="#557392" underline="always">
          feedback
        </Link>{' '}
        form for feedback and/or suggestions (EU TZ)
      </Typography>
      <br />
      <Typography variant="subtitle2" gutterBottom component="div">
        Tip jar: 0x0e9fbabfac3a56d076b62d48964bd7bf057876d7 [Click to copy]
        <br />
        You can also !tip on Discord :) My nickname is @Magg | Kingdom.Watch.
        <br />
        (Oh, wow! I've actually gotten some tips! Thank you so much!)
      </Typography>
      <br />
      <Typography variant="subtitle2" gutterBottom component="div">
        Twitter:{' '}
        <Link
          href="https://twitter.com/KingdomWatchDFK"
          color="#557392"
          underline="always"
        >
          https://twitter.com/KingdomWatchDFK
        </Link>
      </Typography>
      <br />
      <Typography variant="subtitle2" gutterBottom component="div">
        <Link href="/about" color="#557392" underline="always">
          About this page
        </Link>
      </Typography>
    </Container>
  );
}

export default Footer;
