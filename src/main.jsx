import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/Router.jsx'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='font-urbanist'>
       <Toaster position="bottom-right" />
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
