import React from 'react';
import AppRoutes from './routes/Router';
import { BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
      <AppRoutes />
    </BrowserRouter>    
    </>
  );
};

export default App;
