import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddWork from './pages/AddWork';
import EditWork from './pages/EditWork';
import Navbar from './components/Navbar';
import WorkForm from './components/WorkForm';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/add" element={<WorkForm />} />
        <Route path="/works/edit/:id" element={<WorkForm isEdit={true} />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
