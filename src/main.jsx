import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import PageOne from './routes/PageOne.jsx'
import PageTwo from './routes/PageTwo.jsx'
import PageThree from './routes/PageThree.jsx'
import Panel from './routes/Panel.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/step1',
        element: <PageOne />
      },
      {
        path: '/step2',
        element: <PageTwo />
      },
      {
        path: '/step3',
        element: <PageThree />
      },
      {
        path: '/panel',
        element: <Panel />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
