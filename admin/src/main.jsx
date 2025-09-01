import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import DataContextProvider from './Context/DataContext.jsx'
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <DataContextProvider>
      <Toaster/>
      <App />
    </DataContextProvider>
  </BrowserRouter>
</StrictMode>
)
