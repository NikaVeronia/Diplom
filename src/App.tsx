import React from 'react';
import AppRoutes from './routes/Router';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
      <AppRoutes />
    </Router>    
    </>
  );
};

export default App;
