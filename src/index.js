import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Home from './view/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter ([
   {
     path : "/",
    element : <Home/>
  }
  ])



root.render(<RouterProvider router={router}/>);

