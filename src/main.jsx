import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioWebsite from './App.jsx'
import './index.css'  // Make sure this exists and imports Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioWebsite />
  </React.StrictMode>,
)