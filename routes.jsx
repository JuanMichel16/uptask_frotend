import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import NotFound from "./src/pages/NotFound";
import Login from "./src/pages/Login";
import SignUp from "./src/pages/SignUp";
import AuthLayout from "./src/Layouts/AuthLayout";
import ForgotPassword from "./src/pages/ForgotPassword";
import NewPassword from "./src/pages/NewPassword";
import ConfirmAccount from "./src/pages/ConfirmAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "sign-up",
        element: <SignUp />
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "forgot-password/:token",
        element: <NewPassword />
      },
      {
        path: "confirm-account/:id",
        element: <ConfirmAccount />
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
])

export default router;