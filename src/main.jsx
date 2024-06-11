import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CssBaseline } from '@mui/material'
import "./index.css";
import '@fontsource/roboto/500.css';
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline/>
    <App />
    <Analytics/>
  </React.StrictMode>,
)
