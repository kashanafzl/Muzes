import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './view/website/Home';
import SignUp from './view/webapp/Auth/SignUp';
import Bit from './components/webapp/BidOnThe/Bit'
import Login from './components/webapp/Auths/Login';
import Match from './components/webapp/BidOnThe/Match';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marketplace from './view/webapp/Dashboard/Marketplace';
import DashComponent from './components/webapp/Dashboard/DashComponent/DashComponent';
import Center from './components/webapp/Dashboard/Marketplace/Center';
import SingleCompany from './components/webapp/Dashboard/Company/SingleCompany.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "login",
    element: <SignUp/>,
  },
  {
    path: "signup",
    element: <Login/>,
  },
  {
    path: "bit",
    element: <Bit/>,
  },
  {
    path: "match",
    element: <Match/> ,
  },
  {
    path: "app",
    element: <Marketplace/> ,
    children:[
      {
        path: "",
        element: <Center /> ,
      },
      {
        path: "/app/dashboard",
        element: <DashComponent/> ,
      },

      {
        path: "/app/Company",
        element: <SingleCompany/> ,
      }

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
