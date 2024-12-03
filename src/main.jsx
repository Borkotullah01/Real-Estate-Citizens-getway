import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import { Router } from './Routes/Router/Router.jsx';
import FirebaseProvider from './Provider/FirebaseProvider/FirebaseProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
    <RouterProvider router={Router}></RouterProvider>
    </FirebaseProvider>
  </StrictMode>,
)
