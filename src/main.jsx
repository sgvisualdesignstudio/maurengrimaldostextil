import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {createHashRouter} from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '/about',
    element: <div>About</div>,
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
