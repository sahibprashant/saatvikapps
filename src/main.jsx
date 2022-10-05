import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import config from './config'
import './index.css'

document.getElementById("title").innerHTML = config.title;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
