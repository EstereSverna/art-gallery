import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalleryPage from '../pages/GalleryPage';
import ArtDetailPage from '../pages/ArtDetailPage';
import AboutPage from '../pages/AboutPage';

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<GalleryPage />} />
      <Route path="/art/:id" element={<ArtDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </Router>
);

export default AppRouter;
