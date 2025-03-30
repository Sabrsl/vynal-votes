import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './routes/Login';
import Vote from './routes/Vote';
import Confirmation from './routes/Confirmation';
import ThankYou from './routes/ThankYou';
import Observer from './routes/Observer';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/observer" element={<Observer />} />
      </Routes>
    </Router>
  );
}

export default App;
