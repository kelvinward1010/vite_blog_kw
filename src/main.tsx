import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RouterProvider router={routerConfig} />
  </React.StrictMode>,
)
