import { Navigate, useRoutes } from "react-router-dom";
import Page404 from "./pages/Page404";
import UserPage from "./pages/user/UserPage";
import DevicePage from "./pages/device/DevicePage";
import AnalyticsPage from "./pages/analytics/AnalyticsPage";
import GridPage from "./pages/grid/GridPage";
import SupportPage from "./pages/support/SupportPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import { useAuthStore } from "./store/useAuthStore";
import { ManualPage } from "./pages/manual/manualPage";
import LoginPage from "./pages/auth/LoginPage";
import CompanyDashboard from "./pages/user/CompanyPage";
import ForgotPasswordPage from "./pages/auth/ForgotPassword";
import ChangePasswordPage from "./pages/auth/ChangePassword";
import NewLayout from "./pages/landing2/NewLayout";
import HomePage from "./pages/new/HomePage";
import DeviceSetting from "./pages/Profile/DeviceSetting";

export default function Router() {
  const { isAuthenticated, role } = useAuthStore();
  return useRoutes([
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
      path: "/",
      element: isAuthenticated ? (
        <NewLayout />
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

              { path: "profile", element: <ProfilePage /> },
            ]
          : [
              { path: "dashboard", element: <HomePage /> },
              { path: "insights", element: <AnalyticsPage /> },
              { path: "grid", element: <GridPage /> },
              { path: "support", element: <SupportPage /> },
              { path: "profile", element: <ProfilePage /> },
              { path: "setting", element: <DeviceSetting /> },
            ],
      // FOR LOCAL DEVELOPMENT UNCOMMENT FOR EASIER NAVIGATION
      // role?.toUpperCase() === "ADMIN"
      //   ? [
      //       {
      //         path: "user",
      //         element: <UserPage />,
      //       },
      //       {
      //         path: "user/:id",
      //         element: <CompanyDashboard />,
      //       },
      //       {
      //         path: "device",
      //         element: <DevicePage />,
      //       },
      //       { path: "dashboard", element: <HomePage /> },
      //       { path: "analytics", element: <AnalyticsPage /> },
      //       { path: "grid", element: <GridPage /> },
      //       { path: "support", element: <SupportPage /> },
      //       { path: "profile", element: <ProfilePage /> },
      //       { path: "setting", element: <DeviceSetting /> },
      //     ]
      //   : [
      //       {
      //         path: "user",
      //         element: <UserPage />,
      //       },
      //       {
      //         path: "user/:id",
      //         element: <CompanyDashboard />,
      //       },
      //       {
      //         path: "device",
      //         element: <DevicePage />,
      //       },
      //       { path: "dashboard", element: <HomePage /> },
      //       { path: "analytics", element: <AnalyticsPage /> },
      //       { path: "grid", element: <GridPage /> },
      //       { path: "support", element: <SupportPage /> },
      //       { path: "profile", element: <ProfilePage /> },
      //       { path: "setting", element: <DeviceSetting /> },
      //     ],
    },

    {
      path: "/manual",
      element: <ManualPage />,
    },
    {
      path: "/404",
      element: <Page404 />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
