import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='983817886407-69iol3f812fkq49e5sshtqosmg7l80r5.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
