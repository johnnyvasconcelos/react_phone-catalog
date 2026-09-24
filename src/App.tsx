import './App.scss';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Tablets from './pages/Tablets';
import Accessories from './pages/Accessories';
import Phones from './pages/Phones';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

export const App = () => (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="tablets" element={<Tablets />} />
          <Route path="phones" element={<Phones />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);
