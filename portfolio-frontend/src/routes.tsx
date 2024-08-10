import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddWork from './pages/AddWork';
import EditWork from './pages/EditWork';
import Navbar from './components/Navbar';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddWork />} />
        <Route path="/edit/:id" element={<EditWork />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
