import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  Container,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  Person as PersonIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User } from 'lucide-react';

interface Props {
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Search Spaces', path: '/search', icon: SearchIcon },
    { label: 'Dashboard', path: '/dashboard', icon: User },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(10, 10, 15, 0.85)', // Updated background
          backdropFilter: 'blur(20px)',
          border: 'none',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  textDecoration: 'none',
                  fontFamily: '"Space Grotesk", sans-serif',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #8B5FBF 0%, #14B8A6 100%)', // Updated gradient
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '1.5rem',
                }}
              >
                FlexiSpace
              </Typography>
            </motion.div>

            {/* Navigation Items */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    startIcon={<item.icon size={18} />}
                    sx={{
                      color: location.pathname === item.path ? '#A78BFA' : 'text.secondary', // Updated active color
                      fontWeight: location.pathname === item.path ? 600 : 400,
                      background: location.pathname === item.path
                        ? 'rgba(139, 95, 191, 0.15)' // Updated background
                        : 'transparent',
                      border: location.pathname === item.path
                        ? '1px solid rgba(139, 95, 191, 0.3)' // Updated border
                        : '1px solid transparent',
                      borderRadius: '12px',
                      '&:hover': {
                        background: 'rgba(139, 95, 191, 0.1)', // Updated hover
                        color: '#A78BFA', // Updated hover color
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Box>

            {/* Right side buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton color="inherit">
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon sx={{ color: 'text.primary' }} />
                </Badge>
              </IconButton>

              <Avatar
                onClick={handleProfileMenuOpen}
                sx={{
                  width: 36,
                  height: 36,
                  cursor: 'pointer',
                  bgcolor: 'primary.main',
                }}
              >
                U
              </Avatar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            color: 'text.primary',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              {/* Logo */}
              <Box
                onClick={() => navigate('/')}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  mr: 4,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: 'primary.main',
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: 'white', fontWeight: 800 }}
                  >
                    F
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 700, color: 'primary.main' }}
                >
                  FlexiSpace
                </Typography>
              </Box>

              {/* Navigation Buttons */}
              <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
                <Button
                  color="inherit"
                  startIcon={<SearchIcon />}
                  onClick={() => navigate('/search')}
                  sx={{
                    color: location.pathname === '/search' ? 'primary.main' : 'text.primary',
                  }}
                >
                  Explore Spaces
                </Button>
                <Button
                  color="inherit"
                  startIcon={<AddIcon />}
                  sx={{ color: 'text.primary' }}
                >
                  List Your Space
                </Button>
              </Box>

              {/* Right side buttons */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton color="inherit">
                  <Badge badgeContent={3} color="secondary">
                    <NotificationsIcon sx={{ color: 'text.primary' }} />
                  </Badge>
                </IconButton>

                <Avatar
                  onClick={handleProfileMenuOpen}
                  sx={{
                    width: 36,
                    height: 36,
                    cursor: 'pointer',
                    bgcolor: 'primary.main',
                  }}
                >
                  U
                </Avatar>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* Profile Menu */}
      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 4,
          sx: {
            mt: 1.5,
            borderRadius: 2,
            minWidth: 200,
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleNavigation('/dashboard')}>
          <DashboardIcon sx={{ mr: 1 }} />
          Dashboard
        </MenuItem>
        <MenuItem onClick={() => handleNavigation('/profile')}>
          <PersonIcon sx={{ mr: 1 }} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LogoutIcon sx={{ mr: 1 }} />
          Logout
        </MenuItem>
      </Menu>

      {/* Main Content */}
      <Box sx={{ pt: 8 }}>
        {children}
      </Box>
    </Box>
  );
};

// Make sure to have the default export
export default Layout;