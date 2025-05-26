import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./styles/sideBar-Header.css";
import "./styles/dashboard.css"
import "./styles/calendar.css";
import "./styles/upcomingSchedule.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
