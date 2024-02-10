import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// "surroinding out apllication with browserRouter -> react-router-dom to add pages"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> 
    <App />
  </Router>
);
