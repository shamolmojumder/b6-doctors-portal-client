import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import DashboardLayout from "../../Layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/appoinment",
        element: (
          <PrivateRoute>
            <Appoinment></Appoinment>
          </PrivateRoute>
        ),
      },
    ],
  },
 {
  path:"/dashboard",
  element:<PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
  children:[
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>
    }
  ]
 }

]);

export default router;
