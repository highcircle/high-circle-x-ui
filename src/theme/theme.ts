import { createTheme, styled } from '@mui/material/styles';
import { Typography, Box, Container } from '@mui/material';

// Base dark theme
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#667eea' },
    secondary: { main: '#764ba2' },
    background: { default: '#0f0f0f', paper: 'rgba(255,255,255,0.05)' },
    text: { primary: '#ffffff', secondary: 'rgba(255,255,255,0.7)' },
  },
  typography: {
    fontFamily: '"Inter","Roboto","Helvetica","Arial",sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': { width: '8px' },
          '&::-webkit-scrollbar-track': { background: 'rgba(255,255,255,0.1)' },
          '&::-webkit-scrollbar-thumb': { background: 'rgba(102,126,234,0.5)', borderRadius: '4px' },
        },
      },
    },
  },
});

// Reusable styled utilities:

// Container wrapper for vertical padding
export const SectionContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

// Section headings
export const SectionHeading = styled(Typography)(({ theme }) => ({
  ...theme.typography.h4,
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

// Section subtitles (intro text)
export const SectionSubtitle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle1,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(4),
}));

// Standard body text
export const SectionBody = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  marginBottom: theme.spacing(4),
}));

// Centered button wrapper
export const SectionButtonContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(4),
}));