import { Container, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box style={{backgroundColor: "gray"}} sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          {new Date().getFullYear()}
          {' My Company Name.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
