import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Blog from './Blog/Blog';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
 {path: "/",element: <Home />,},

 {path: "/blog",element: <Blog />,}
 
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  
     <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
)
