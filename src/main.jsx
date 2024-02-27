import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './Components/Organims/Login.jsx'
import { Nav } from './Components/Molecules/Nav.jsx'
import { Home } from './Components/Organims/Home.jsx'
import { Layout } from './Components/Layout.jsx'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    index: true
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
  {
    path: "/",
    element: <Layout/>,
    children: [ 
      {
        path: "/home",
        element: <Home/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
