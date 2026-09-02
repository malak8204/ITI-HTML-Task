import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Send from './Components/Send/Send'
import NotFound from './Components/Notfound/Notfound'
import About from './Components/About/About'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  
  const routes = createBrowserRouter([
    {path: '/', element: <Layout />, children: [
      {path: '/home', element: <Home />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <Contact />},
      {path: '/send', element: <Send />},
       { path: '*', element: <NotFound /> }
    ]},
  ]);

  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
