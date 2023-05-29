import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

import App from './App.jsx';
import GlobalStyle from './GlobalStyle.jsx';

axios.defaults.headers.common['Authorization'] = 'M0zrFooQ89jPXwBU26mDf9i0';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
