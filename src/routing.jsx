// import App from "./App";
import Layout from "./components/Layout";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path: "/post",
    element: <Layout />,
  },
 
  
  // children: [
  //   {
  //     path: "/register",
  //     element: <Registration />,
  //   },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/about-us",
  //   element: <About />,
  // },
  // {
  //   path: "/contact-us",
  //   element: <Contact />,
  // },
  // {
  //   path: "/explore",
  //   element: <Explore />,
  // },
  // {
  //   path: "/create-quote",
  //   element: <CreateQuote />,
  // },
  // {
  //   path: "/edit",
  //   element: <Register />,
  // },
  // ],
  // },
]);

export default router;
