import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MainLayout from '../../Layout/MainLayout/MainLayout'
import Home from '../Home/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>
        }
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
