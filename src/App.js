import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Story from "./components/Story";
import OtherPage from "./components/OtherPage";
import Appointment from "./components/Appointment";
import Blog from "./components/Blog";
import Quries from "./components/Quries";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/story",
    element: <Story/>,
  },
  {
    path: "/otherPage",
    element: <OtherPage/>,
  },
  {
    path: "/blogs",
    element: <Blog/>,
  },
  {
    path: "/faq",
    element: <Quries/>,
  },
  {
    path: "/appointment",
    element: <Appointment/>
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </React.StrictMode>
  );
}

export default App;
