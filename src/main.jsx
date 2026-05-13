import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import '../src/_variables.scss';
import { RouterProvider } from 'react-router'
import router from './config/router'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
