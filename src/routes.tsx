import { Navigate, useRoutes } from "react-router-dom";
import Page404 from "./pages/Page404";
import UserPage from "./pages/user/UserPage";
import DevicePage from "./pages/device/DevicePage";
import AppLayout from "./layout/AppLayout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import GridPage from "./pages/grid/GridPage";
import SettingsPage from "./pages/setting/SettingsPage";
import SupportPage from "./pages/support/SupportPage";
import UpdatePage from "./pages/updates/UpdatePage";
import ProfilePage from "./pages/Profile/ProfilePage";
import AdminLayout from "./layout/AdminLayout";

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
      path: "/",
      element: isAuthenticated ? (
        <AdminLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        {
          path: "user",
          element: <UserPage />,
        },
        {
          path: "user/:id",
          element: <DashboardPage />,
        },
        {
          path: "device",
          element: <DevicePage />,
        },
      ],
    },
    {
      path: "/",
      element: isAuthenticated ? (
        <AppLayout />
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
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
    {
      path: "/404",
      element: <Page404 />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
