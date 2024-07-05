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
import Login from "./pages/auth/Login";
import { ManualPage } from "./pages/manual/manualPage";
import { Layout } from "./pages/demo/Layout";
import Login2 from "./pages/auth/Login2";
import NewLandingPage from "./pages/landing2";
import CompanyDashboard from "./pages/user/CompanyPage";

export default function Router() {
  const { isAuthenticated, role } = useAuthStore();
  console.log(isAuthenticated, role);
  return useRoutes([
    {
      path: "/",
      element: <NewLandingPage />,
    },
    {
      path: "/login",
      element: <Login2 />,
    },
    {
      path: "/login2",
      element: <Login />,
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
      path: role?.toUpperCase() !== "ADMIN" ? "/admin" : "/user",
      element: isAuthenticated ? <MainLayout /> : <Login />,
      children:
        role?.toUpperCase() !== "ADMIN"
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
