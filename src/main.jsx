/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './components/Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs.jsx';
import Statistics from './components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children:[  
    {
        path:'/',
        element:<Home></Home>
    },
    {
      path:'/featuredJobs',
      element:<FeaturedJobs></FeaturedJobs>
    },
    {
      path:'/job/:id',
      element:<JobDetails></JobDetails>
    },
    {
      path:'/applied',
      element:<AppliedJobs></AppliedJobs>
    },
    {
         path:'/statistics',
         element:<Statistics></Statistics>
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
