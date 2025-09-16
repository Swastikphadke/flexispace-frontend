import { createTheme } from '@mui/material/styles';

// Light, airy, and trustworthy palette for better visibility
export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FF5A5F', // Coral/Orange - Modern & Energetic
      light: '#FF7B7F',
      dark: '#E6444A',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#007BFF', // Trustworthy Blue
      light: '#4DA3FF',
      dark: '#0056CC',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#28A745', // Soft Green
      light: '#5CBF6A',
      dark: '#1E7E34',
    },
    warning: {
      main: '#FFC107', // Warm Yellow
      light: '#FFD54F',
      dark: '#FF8F00',
    },
    background: {
      default: '#F9F9F9', // Off-white background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D2D2D', // Dark charcoal grey
      secondary: '#6B7280',
    },
    divider: '#E5E7EB',
    grey: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
  },
  typography: {
    fontFamily: '"Inter", "Space Grotesk", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(32px, 5vw, 56px)',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#2D2D2D',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(24px, 4vw, 36px)',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: '#2D2D2D',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      fontSize: 'clamp(18px, 3vw, 24px)',
      lineHeight: 1.4,
      color: '#2D2D2D',
    },
    body1: {
      fontSize: '16px',
      lineHeight: 1.6,
      color: '#4B5563',
    },
    body2: {
      fontSize: '14px',
      lineHeight: 1.5,
      color: '#6B7280',
    },
  },
  spacing: 8, // 8px spacing rule
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 600,
          textTransform: 'none',
          letterSpacing: '0.01em',
          boxShadow: 'none',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-1px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        contained: {
          background: '#FF5A5F',
          color: '#FFFFFF',
          '&:hover': {
            background: '#E6444A',
          },
        },
        outlined: {
          borderColor: '#E5E7EB',
          color: '#4B5563',
          '&:hover': {
            borderColor: '#FF5A5F',
            background: 'rgba(255, 90, 95, 0.04)',
            color: '#FF5A5F',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
          border: '1px solid #F3F4F6',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E5E7EB',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          color: '#2D2D2D',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
        },
        colorSuccess: {
          backgroundColor: '#D1FAE5',
          color: '#065F46',
        },
        colorWarning: {
          backgroundColor: '#FEF3C7',
          color: '#92400E',
        },
        colorInfo: {
          backgroundColor: '#DBEAFE',
          color: '#1E40AF',
        },
      },
    },
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
    '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
    '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
    '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
    ...Array(20).fill('0 25px 50px rgba(0, 0, 0, 0.25)'),
  ] as any,
});