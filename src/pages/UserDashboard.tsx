import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Chip,
  Paper,
  Stack,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  LinearProgress,
  Divider,
  Badge,
  Alert,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  CalendarToday as CalendarIcon,
  Star as StarIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
  Payment as PaymentIcon,
  Security as SecurityIcon,
  EmojiEvents as TrophyIcon,
  AccountBalance as WalletIcon,
  Favorite as FavoriteIcon,
  QrCode as QrCodeIcon,
  Download as DownloadIcon,
  MoreVert as MoreIcon,
  TrendingUp as TrendingIcon,
  Loyalty as LoyaltyIcon,
  AssignmentTurnedIn as CompletedIcon,
  Pending as PendingIcon,
  Cancel as CancelledIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dashboard-tabpanel-${index}`}
      aria-labelledby={`dashboard-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const UserDashboard: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);

  // Mock user data
  const user = {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    memberSince: '2023',
    avatar: 'S',
    loyaltyPoints: 2450,
    loyaltyTier: 'Gold',
    totalBookings: 12,
    totalSpent: 1680,
    savedSpaces: 8,
  };

  // Mock booking history
  const bookings = [
    {
      id: 1,
      space: {
        title: 'Lincoln Elementary Playground',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        location: 'Downtown, SF',
      },
      date: '2024-03-20',
      time: '2:00 PM - 6:00 PM',
      status: 'completed',
      amount: 180,
      rating: 5,
      smartContract: '0x1234...5678',
    },
    {
      id: 2,
      space: {
        title: 'Tech Corp Conference Center',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        location: 'SOMA, SF',
      },
      date: '2024-03-25',
      time: '10:00 AM - 2:00 PM',
      status: 'upcoming',
      amount: 500,
      smartContract: '0xabcd...efgh',
    },
    {
      id: 3,
      space: {
        title: 'City Hall Community Room',
        image: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        location: 'Civic Center, SF',
      },
      date: '2024-02-15',
      time: '6:00 PM - 10:00 PM',
      status: 'cancelled',
      amount: 140,
    },
  ];

  // Mock favorite spaces
  const favoriteSpaces = [
    {
      id: 1,
      title: 'Lincoln Elementary Playground',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      price: 45,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Tech Corp Conference Center',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
      price: 125,
      rating: 4.9,
    },
  ];

  const loyaltyTiers = [
    { name: 'Bronze', points: 0, color: '#CD7F32', benefits: ['5% discount', 'Priority support'] },
    { name: 'Silver', points: 1000, color: '#C0C0C0', benefits: ['10% discount', 'Early access', 'Free cleaning'] },
    { name: 'Gold', points: 2000, color: '#FFD700', benefits: ['15% discount', 'Premium support', 'Free security'] },
    { name: 'Platinum', points: 5000, color: '#E5E4E2', benefits: ['20% discount', 'Concierge service', 'All services included'] },
  ];

  const currentTier = loyaltyTiers.find(tier => tier.name === user.loyaltyTier) || loyaltyTiers[0];
  const nextTier = loyaltyTiers[loyaltyTiers.findIndex(tier => tier.name === user.loyaltyTier) + 1];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CompletedIcon sx={{ color: 'success.main' }} />;
      case 'upcoming':
        return <PendingIcon sx={{ color: 'warning.main' }} />;
      case 'cancelled':
        return <CancelledIcon sx={{ color: 'error.main' }} />;
      default:
        return <ScheduleIcon />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'success';
      case 'upcoming':
        return 'warning';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
          Welcome back, {user.name.split(' ')[0]}! 👋
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage your bookings and track your FlexiSpace journey
        </Typography>
      </Box>

      {/* Stats Overview */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'primary.main',
                }}
              >
                <CalendarIcon />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                {user.totalBookings}
              </Typography>
              <Typography color="text.secondary">Total Bookings</Typography>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'success.main',
                }}
              >
                <PaymentIcon />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>
                ${user.totalSpent}
              </Typography>
              <Typography color="text.secondary">Total Spent</Typography>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: currentTier.color,
                }}
              >
                <TrophyIcon />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: currentTier.color }}>
                {user.loyaltyPoints}
              </Typography>
              <Typography color="text.secondary">Loyalty Points</Typography>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card sx={{ textAlign: 'center', p: 3 }}>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: 'secondary.main',
                }}
              >
                <FavoriteIcon />
              </Avatar>
              <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                {user.savedSpaces}
              </Typography>
              <Typography color="text.secondary">Saved Spaces</Typography>
            </Card>
          </motion.div>
        </Grid>
      </Grid>

      {/* Loyalty Status */}
      <Card sx={{ mb: 4, p: 3, background: `linear-gradient(135deg, ${currentTier.color}20 0%, ${currentTier.color}10 100%)` }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Box display="flex" alignItems="center" mb={2}>
              <Badge
                badgeContent={currentTier.name}
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    bgcolor: currentTier.color,
                    color: 'white',
                    fontWeight: 600,
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    mr: 2,
                    bgcolor: currentTier.color,
                  }}
                >
                  <TrophyIcon />
                </Avatar>
              </Badge>
              <Box ml={2}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {currentTier.name} Member
                </Typography>
                <Typography color="text.secondary">
                  Member since {user.memberSince}
                </Typography>
              </Box>
            </Box>

            {nextTier && (
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {nextTier.points - user.loyaltyPoints} points to {nextTier.name}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={(user.loyaltyPoints / nextTier.points) * 100}
                  sx={{
                    height: 8,
                    borderRadius: 4,
                    bgcolor: 'grey.200',
                    '& .MuiLinearProgress-bar': {
                      bgcolor: nextTier.color,
                    },
                  }}
                />
              </Box>
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 2, bgcolor: 'white' }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                Your Benefits:
              </Typography>
              {currentTier.benefits.map((benefit, index) => (
                <Typography key={index} variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                  <StarIcon sx={{ fontSize: 16, mr: 1, color: currentTier.color }} />
                  {benefit}
                </Typography>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </Card>

      {/* Tabs */}
      <Paper elevation={2} sx={{ borderRadius: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 3 }}>
            <Tab label="Recent Bookings" />
            <Tab label="Favorite Spaces" />
            <Tab label="Account Settings" />
          </Tabs>
        </Box>

        {/* Recent Bookings Tab */}
        <TabPanel value={tabValue} index={0}>
          <Box px={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Your Booking History
            </Typography>

            <List>
              {bookings.map((booking, index) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ListItem
                    sx={{
                      border: 1,
                      borderColor: 'grey.200',
                      borderRadius: 2,
                      mb: 2,
                      bgcolor: 'background.paper',
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={booking.space.image}
                        sx={{ width: 60, height: 60 }}
                      />
                    </ListItemAvatar>

                    <ListItemText
                      primary={
                        <Box display="flex" alignItems="center" mb={1}>
                          <Typography variant="h6" sx={{ fontWeight: 600, mr: 2 }}>
                            {booking.space.title}
                          </Typography>
                          <Chip
                            label={booking.status}
                            color={getStatusColor(booking.status) as any}
                            size="small"
                            icon={getStatusIcon(booking.status)}
                          />
                        </Box>
                      }
                      secondary={
                        <Stack spacing={1}>
                          <Box display="flex" alignItems="center">
                            <LocationIcon sx={{ fontSize: 16, mr: 1 }} />
                            <Typography variant="body2">{booking.space.location}</Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <ScheduleIcon sx={{ fontSize: 16, mr: 1 }} />
                            <Typography variant="body2">
                              {booking.date} • {booking.time}
                            </Typography>
                          </Box>
                          {booking.smartContract && (
                            <Box display="flex" alignItems="center">
                              <SecurityIcon sx={{ fontSize: 16, mr: 1 }} />
                              <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                {booking.smartContract}
                              </Typography>
                            </Box>
                          )}
                        </Stack>
                      }
                    />

                    <ListItemSecondaryAction>
                      <Stack alignItems="flex-end" spacing={1}>
                        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          ${booking.amount}
                        </Typography>
                        {booking.status === 'upcoming' && (
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<QrCodeIcon />}
                          >
                            Access Code
                          </Button>
                        )}
                        {booking.status === 'completed' && booking.rating && (
                          <Box display="flex" alignItems="center">
                            <StarIcon sx={{ fontSize: 16, color: 'warning.main' }} />
                            <Typography variant="body2">{booking.rating}/5</Typography>
                          </Box>
                        )}
                        <IconButton>
                          <MoreIcon />
                        </IconButton>
                      </Stack>
                    </ListItemSecondaryAction>
                  </ListItem>
                </motion.div>
              ))}
            </List>
          </Box>
        </TabPanel>

        {/* Favorite Spaces Tab */}
        <TabPanel value={tabValue} index={1}>
          <Box px={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Your Saved Spaces
            </Typography>

            <Grid container spacing={3}>
              {favoriteSpaces.map((space, index) => (
                <Grid item xs={12} sm={6} md={4} key={space.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card sx={{ height: '100%' }}>
                      <Box sx={{ position: 'relative' }}>
                        <img
                          src={space.image}
                          alt={space.title}
                          style={{
                            width: '100%',
                            height: 200,
                            objectFit: 'cover',
                          }}
                        />
                        <IconButton
                          sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            bgcolor: 'rgba(255,255,255,0.9)',
                            color: 'error.main',
                          }}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </Box>
                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                          {space.title}
                        </Typography>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700 }}>
                            ${space.price}/hour
                          </Typography>
                          <Box display="flex" alignItems="center">
                            <StarIcon sx={{ fontSize: 16, color: 'warning.main', mr: 0.5 }} />
                            <Typography variant="body2">{space.rating}</Typography>
                          </Box>
                        </Box>
                        <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                          Book Again
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </TabPanel>

        {/* Account Settings Tab */}
        <TabPanel value={tabValue} index={2}>
          <Box px={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
              Account Settings
            </Typography>

            <Stack spacing={3}>
              <Alert severity="info">
                Account management features will be available in the next update.
              </Alert>

              <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                  Profile Information
                </Typography>
                <Stack spacing={2}>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Name:</Typography>
                    <Typography fontWeight={600}>{user.name}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Email:</Typography>
                    <Typography fontWeight={600}>{user.email}</Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Typography>Member Since:</Typography>
                    <Typography fontWeight={600}>{user.memberSince}</Typography>
                  </Box>
                </Stack>
              </Paper>

              <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                  Blockchain Wallet
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <WalletIcon sx={{ mr: 2, color: 'primary.main' }} />
                  <Box>
                    <Typography sx={{ fontFamily: 'monospace' }}>
                      0x1234567890abcdef1234567890abcdef12345678
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Connected wallet for smart contracts
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Stack>
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default UserDashboard;