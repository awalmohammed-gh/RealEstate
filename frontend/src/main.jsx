import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HouseContextProvider } from './context/HouseContextProvider.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HouseContextProvider>
      <App />
    </HouseContextProvider>
  </StrictMode>,
);
