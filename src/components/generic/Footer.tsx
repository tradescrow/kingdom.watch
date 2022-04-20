import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import Link from '@mui/material/Link';

function Footer(): JSX.Element {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
    return navigator.clipboard.writeText(
      '0x0e9fbabfac3a56d076b62d48964bd7bf057876d7'
    );
  };

  return (
    <Container sx={{ paddingTop: '3rem !important' }}>
      <Typography variant="subtitle1" gutterBottom component="div">
        Please contact <strong>Magg</strong> in the DFK Discord or use the{' '}
        <Link
          component={RouterLink}
          to="/feedback"
          color="#557392"
          underline="always"
        >
          feedback
        </Link>{' '}
        form for feedback and/or suggestions (EU TZ)
      </Typography>
      <br />
      <Typography variant="subtitle2" gutterBottom component="div">
        Tip jar: 0x0e9fbabfac3a56d076b62d48964bd7bf057876d7{' '}
        {copied ? (
          <Button disabled sx={{ color: '#e1e1e1 !important' }}>
            Copied!
          </Button>
        ) : (
          <Button
            onClick={copyToClipboard}
            sx={{
              color: '#e1e1e1 !important',
              '&.MuiButtonBase-root:hover': {
                bgcolor: 'transparent',
              },
            }}
          >
            [Click to copy]
          </Button>
        )}
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
        <Link
          component={RouterLink}
          to="/about"
          color="#557392"
          underline="always"
        >
          About this page
        </Link>
      </Typography>
    </Container>
  );
}

export default Footer;
