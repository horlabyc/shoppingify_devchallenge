import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';
import AuthContextProvider from './contexts/appContext';

function App() {
  return (
    <AuthContextProvider>
      <ToastProvider autoDismiss placement="top-center">
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </ToastProvider>
    </AuthContextProvider>
  );
}

export default App;
