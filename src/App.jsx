import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/Rootlayout";
import About from "./Pages/About";
import Departments from "./Pages/Departments";
import Services from "./Pages/Services";
import Doctor from "./Pages/Doctor";
import MorePage from "./Pages/MorePage";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Dropdown/Sub-pages
import DepartmentDetail from "./Pages/DepartmentDetail";
import ServiceDetail from "./Pages/ServiceDetail";
import Appointment from "./Pages/Appointment";
import Testimonials from "./Pages/Testimonials";
import FAQ from "./Pages/FAQ";
import Gallery from "./Pages/Gallery";
import Term from "./Pages/Term";
import Privacy from "./Pages/Privacy";
import DoctorDetail from "./Pages/DoctorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Departments",
        element: <Departments />,
      },
      {
        path: "Services",
        element: <Services />,
      },
      {
        path: "Doctor",
        element: <Doctor />,
      },
      {
        path: "MorePage",
        element: <MorePage />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "DepartmentDetail",
        element: <DepartmentDetail />,
      },
      {
        path: "ServiceDetail",
        element: <ServiceDetail />,
      },
      {
        path: "Appointment",
        element: <Appointment />,
      },
      {
        path: "Testimonials",
        element: <Testimonials />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "Gallery",
        element: <Gallery />,
      },
      {
        path: "Term",
        element: <Term />,
      },
      {
        path: "Privacy",
        element: <Privacy />,
      },
       {
        path: "DoctorDetail",
        element: <DoctorDetail />,
      },
      {
        path: "404",
        element: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
