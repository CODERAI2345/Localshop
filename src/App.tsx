import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import StreetsPage from './pages/StreetsPage';
import StreetPage from './pages/StreetPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryPage from './pages/CategoryPage';
import EnquiryPage from './pages/EnquiryPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/streets" element={<StreetsPage />} />
          <Route path="/streets/:streetId" element={<StreetPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/enquire" element={<EnquiryPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;