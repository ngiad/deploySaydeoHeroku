import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext';
import ReduxProvider from './Redux/ReduxProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <AuthProvider>
          <ReduxProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ReduxProvider>
        </AuthProvider>
  </React.StrictMode>
);

