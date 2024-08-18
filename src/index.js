import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router} from 'react-router-dom';
import "./assets/styles/styles.css";
import App from './App';
import { ContextBooksProvider } from './context/ContextBooks';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextBooksProvider>
        <App />
      </ContextBooksProvider>
    </Router>
  </React.StrictMode>
);

