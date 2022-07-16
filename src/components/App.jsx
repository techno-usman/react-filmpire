import React from 'react';
import { CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';

const app = () => (
  <div>
    <CssBaseline />
    <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
      <Link to="/invoices">Invoices</Link>
    </nav>
    <h1>Hello World - App</h1>
  </div>

);

export default app;