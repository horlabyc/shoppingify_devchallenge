import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <ToastProvider autoDismiss placement="bottom-center">
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </ToastProvider>
  );
}

export default App;
