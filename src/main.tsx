import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routerConfig } from './router.tsx'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={routerConfig} />
    </RecoilRoot>
  </React.StrictMode>,
)
