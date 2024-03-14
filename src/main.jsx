import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  './styles/style.sass'
import './styles/index.css'
import Router from './routes/router'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
