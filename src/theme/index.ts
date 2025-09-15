import { createTheme } from '@mui/material/styles';

// Premium color palette inspired by modern design systems
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8B5FBF', // Rich Purple - premium & trustworthy
      light: '#A78BFA',
      dark: '#7C3AED',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#14B8A6', // Teal - energy & growth
      light: '#5EEAD4',
      dark: '#0F766E',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0A0A0F', // Deep charcoal - more sophisticated than blue
      paper: 'rgba(20, 20, 30, 0.8)',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    success: {
      main: '#22C55E', // Green
      light: '#4ADE80',
      dark: '#16A34A',
    },
    warning: {
      main: '#F59E0B', // Amber
      light: '#FBBF24',
      dark: '#D97706',
    },
    error: {
      main: '#EF4444', // Red
      light: '#F87171',
      dark: '#DC2626',
    },
    info: {
      main: '#3B82F6', // Blue
      light: '#60A5FA',
      dark: '#2563EB',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 800,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.3,
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: '1.125rem',
      lineHeight: 1.7,
      fontWeight: 400,
    },
    button: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '0.025em',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 32px',
          fontSize: '1rem',
          fontWeight: 600,
          background: 'linear-gradient(135deg, #8B5FBF 0%, #14B8A6 100%)',
          boxShadow: '0 8px 25px rgba(139, 95, 191, 0.25)',
          border: 'none',
          '&:hover': {
            background: 'linear-gradient(135deg, #7C3AED 0%, #0F766E 100%)',
            boxShadow: '0 12px 35px rgba(139, 95, 191, 0.35)',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(20, 20, 30, 0.7)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(139, 95, 191, 0.15)',
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
});