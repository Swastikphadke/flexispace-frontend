import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './utils/theme';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SpaceDetailPage from './pages/SpaceDetailPage';
import BookingPage from './pages/BookingPage';
import UserDashboard from './pages/UserDashboard';
import HostSpacePage from './pages/HostSpacePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/space/:id" element={<SpaceDetailPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/host" element={<HostSpacePage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
