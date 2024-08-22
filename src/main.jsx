import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home/Home';
import Shop from './Shop/Shop';
import ProductView from './components/ProductView.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
 {path: "/",element: <Home />,},

 {path: "/shop",element: <Shop />,},

 {path: "/shop/products/:producti",element: <ProductView />,}
  ]
  },
]);
createRoot(document.getElementById('root')).render(
  
     <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
)
