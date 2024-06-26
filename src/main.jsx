import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppProvider } from './context/SliderContext.jsx'
import Urus from './components/Urus.jsx'
import Revuelto from './components/Revuelto.jsx'
import RevueltoConfig from './components/RevueltoConfig.jsx'
import UrusConfig from './components/UrusConfig.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  },
  {
    path : '/urus',
    element : <Urus />
  },
  {
    path : '/revuelto',
    element : <Revuelto />
  },
  {
    path : '/revuelto/config',
    element : <RevueltoConfig />
  },
  {
    path : '/urus/config',
    element : <UrusConfig />
  }

   
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
)
