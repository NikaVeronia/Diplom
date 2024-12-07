import React from 'react';
import Header from './components/Header/Header';
import AppRoutes from './routes/Router';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
    
    <Header />
      <Router>
      <AppRoutes />
    </Router>    
    </>
  );
};

export default App;
