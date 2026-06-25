import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

 import './index.css'

import App from './App'
import AppRoutes from './Routes/AppRoutes.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
)
