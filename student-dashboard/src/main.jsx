import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Students from './features/students.jsx'; // <- correct path
import 'bootstrap/dist/css/bootstrap.min.css';
import Courses from './features/courses.jsx'; // <- correct path
import Home from './features/Home.jsx'; // <- correct path

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "students",  // child route
        element: <Students />
      },
      {
        path: "courses",  // child route
        element: <Courses />
      },
      {
        path: "home",  // child route
        element: <Home />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={router} />
  
    
);