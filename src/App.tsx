import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ToastProvider } from 'react-toast-notifications';
import AppContextProvider from './contexts/appContext';

function App() {
  return (
    <AppContextProvider>
      <ToastProvider autoDismiss placement="top-center">
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </ToastProvider>
    </AppContextProvider>
  );
}

export default App;
