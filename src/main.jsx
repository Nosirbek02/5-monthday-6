import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './components/config/global-style.js'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <App />
  <GlobalStyle/>
  </>
)
