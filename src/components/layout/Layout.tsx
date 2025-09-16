import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Container,
  
} from '@mui/material';
import {
  Search as SearchIcon,
  Dashboard as DashboardIcon,
  Help as HelpIcon,
  Logout as LogoutIcon,
  Home as HomeIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Smart scrolling header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
  // const isScrollingDown = prevScrollPos < currentScrollPos;

      setIsScrolled(currentScrollPos > 20);
      // Optionally toggle visibility for advanced header behavior
      // setVisible(
      //   (prevScrollPos > currentScrollPos && currentScrollPos > 100) ||
      //     currentScrollPos < 10
      // );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  const isMenuOpen = Boolean(anchorEl);
  const isLoggedIn = true; // Replace with actual auth state

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* FIXED: Always Visible Navigation Header */}
      <AppBar
        position="sticky"
        sx={{
          background: isScrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid #E5E7EB' : 'none',
          boxShadow: isScrolled
            ? '0 2px 8px rgba(0, 0, 0, 0.08)'
            : '0 1px 3px rgba(0, 0, 0, 0.05)',
          transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            {/* Logo - Always Links to Home */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  color: '#FF5A5F',
                  fontSize: '1.5rem',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <HomeIcon sx={{ fontSize: '1.2rem' }} />
                FlexiSpace
              </Typography>
            </motion.div>

            {/* Essential Navigation Links */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              {/* Search Spaces */}
              <Button
                component={Link}
                to="/search"
                startIcon={<SearchIcon />}
                sx={{
                  color: location.pathname === '/search' ? '#FF5A5F' : '#4B5563',
                  fontWeight: location.pathname === '/search' ? 600 : 500,
                  background:
                    location.pathname === '/search'
                      ? 'rgba(255, 90, 95, 0.1)'
                      : 'transparent',
                  borderRadius: '8px',
                  px: 2,
                  py: 1,
                  '&:hover': {
                    background: 'rgba(255, 90, 95, 0.05)',
                    color: '#FF5A5F',
                  },
                }}
              >
                Search Spaces
              </Button>

              {/* List Your Space */}
              <Button
                component={Link}
                to="/host"
                startIcon={<AddIcon />}
                variant="outlined"
                sx={{
                  borderColor: '#E5E7EB',
                  color: '#4B5563',
                  '&:hover': {
                    borderColor: '#FF5A5F',
                    background: 'rgba(255, 90, 95, 0.04)',
                    color: '#FF5A5F',
                  },
                }}
              >
                List Your Space
              </Button>

              {/* User Profile/Login */}
              {isLoggedIn ? (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Avatar
                    onClick={handleProfileMenuOpen}
                    sx={{
                      width: 36,
                      height: 36,
                      cursor: 'pointer',
                      backgroundColor: '#FF5A5F',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '14px',
                      border: '2px solid #FFFFFF',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    S
                  </Avatar>
                </motion.div>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => navigate('/login')}
                  sx={{
                    backgroundColor: '#FF5A5F',
                    '&:hover': { backgroundColor: '#E6444A' },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Simplified Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 3,
          sx: {
            mt: 1.5,
            borderRadius: '12px',
            minWidth: 180,
            backgroundColor: '#FFFFFF',
            border: '1px solid #E5E7EB',
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem
          onClick={() => handleNavigation('/dashboard')}
          sx={{
            color: '#2D2D2D',
            borderRadius: '8px',
            mx: 1,
            my: 0.5,
            '&:hover': { backgroundColor: 'rgba(255, 90, 95, 0.04)' },
          }}
        >
          <DashboardIcon sx={{ mr: 2, color: '#FF5A5F' }} />
          Dashboard
        </MenuItem>
        <MenuItem
          onClick={() => handleNavigation('/help')}
          sx={{
            color: '#2D2D2D',
            borderRadius: '8px',
            mx: 1,
            my: 0.5,
            '&:hover': { backgroundColor: 'rgba(255, 90, 95, 0.04)' },
          }}
        >
          <HelpIcon sx={{ mr: 2, color: '#007BFF' }} />
          Help Center
        </MenuItem>
        <MenuItem
          onClick={handleMenuClose}
          sx={{
            color: '#2D2D2D',
            borderRadius: '8px',
            mx: 1,
            my: 0.5,
            '&:hover': { backgroundColor: 'rgba(239, 68, 68, 0.04)' },
          }}
        >
          <LogoutIcon sx={{ mr: 2, color: '#EF4444' }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Main Content */}
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;