import { Navigate, useRoutes } from "react-router-dom";
import Page404 from "./pages/Page404";
import UserPage from "./pages/user/UserPage";
import DevicePage from "./pages/device/DevicePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import GridPage from "./pages/grid/GridPage";
import SettingsPage from "./pages/setting/SettingsPage";
import SupportPage from "./pages/support/SupportPage";
import UpdatePage from "./pages/updates/UpdatePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import MainLayout from "./layout/MainLayout";
import { useAuthStore } from "./store/useAuthStore";
import { ManualPage } from "./pages/manual/manualPage";
import { Layout } from "./pages/demo/Layout";
import LoginPage from "./pages/auth/LoginPage";
import CompanyDashboard from "./pages/user/CompanyPage";
import LandingLayout from "./pages/landing2/Layout";
import SupportLanding from "./pages/landing2/Support";
import NewLandingPage from "./pages/landing2";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ChangePasswordPage from "./pages/auth/ChangePassword";

export default function Router() {
  const { isAuthenticated, role } = useAuthStore();
  console.log(isAuthenticated, role);
  return useRoutes([
    {
      path: "/",
      element: <LandingLayout />,
      children: [
        { path: "", element: <NewLandingPage /> },
        {
          path: "/support",
          element: <SupportLanding />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPasswordPage />,
    },
    {
      path: "/changePassword",
      element: <ChangePasswordPage />,
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
    // {
    //   path: "/",
    //   element: isAuthenticated ? <MainLayout/> : <Login/>,
    //   children: [
    {
      path: role?.toUpperCase() === "ADMIN" ? "/admin" : "/user",
      element: isAuthenticated ? (
        <MainLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children:
        role?.toUpperCase() === "ADMIN"
          ? [
              {
                path: "user",
                element: <UserPage />,
              },
              {
                path: "user/:id",
                element: <CompanyDashboard />,
              },
              {
                path: "device",
                element: <DevicePage />,
              },
            ]
          : [
              {
                path: "dashboard",
                element: <DashboardPage />,
              },
              {
                path: "analytics",
                element: <AnalyticsPage />,
              },
              {
                path: "grid",
                element: <GridPage />,
              },
              {
                path: "settings",
                element: <SettingsPage />,
              },
              {
                path: "support",
                element: <SupportPage />,
              },
              {
                path: "updates",
                element: <UpdatePage />,
              },
              {
                path: "profile",
                element: <ProfilePage />,
              },
            ],
    },
    //   ],
    // },
    {
      path: "/manual",
      element: <ManualPage />,
    },
    {
      path: "/demo",
      element: <Layout />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
