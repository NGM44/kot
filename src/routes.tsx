import { Navigate, useRoutes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import MainLayout from "./layout/layout";
import Page404 from "./pages/Page404";
import LandingPage from "./pages/landing/LandingPage";
import UserPage from "./pages/user/UserPage";
import DevicePage from "./pages/device/DevicePage";

export default function Router() {
  const { isAuthenticated } = { isAuthenticated: true };
  // useAuthStore();
  return useRoutes([
    {
      path: "/login",
      element: <p>Login</p>,
    },
    {
      path: "/signup",
      element: <p>signup</p>,
    },
    {
      path: "/resetpassword/",
      element: <p>Reset Password</p>,
    },
    {
      path: "/forgotpassword",
      element: <p>Forgot Password</p>,
    },
    {
      path: "/home",
      element: isAuthenticated ? (
        <MainLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          path: "overview",
          element: <p>Overview</p>,
        },
      ],
    },
    {
      path: "/user",
      element: isAuthenticated ? (
        <MainLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          path: "",
          element: <UserPage />,
        },
      ],
    },
    {
      path: "/device",
      element: isAuthenticated ? (
        <MainLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          path: "",
          element: <DevicePage />,
        },
      ],
    },

    {
      path: "/",
      element: <LandingPage />,
    },

    {
      path: "/setting",
      element: isAuthenticated ? (
        <MainLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          path: "user",
          element: <p></p>,
        },
      ],
    },

    {
      path: "/404",
      element: <Page404 />,
    },

    { path: "*", element: <Navigate to="/404" replace /> },
    { path: "/", element: <Navigate to="/overview" replace /> },
  ]);
}
