import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Prodhan from './Prodhan';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import Project from './components/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Prodhan></Prodhan>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/project/:id',
        element: <Project/>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
