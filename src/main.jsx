import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './route/Route'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Route}></RouterProvider>
  </StrictMode>,
)