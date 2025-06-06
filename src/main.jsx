import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'   // import router
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* wrap app component with BrowserRouter to allow for page routes */}
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </StrictMode>
);
