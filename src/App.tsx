import { useLocation } from "react-router-dom";
import Router from "./routes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  handleClickForTracking,
  handlePageLoadForTracking,
} from "./analytics";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import { QueryClientProvider } from "react-query";
import ScrollToTop from "./utils/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { queryClient } from "./queries/client";
import useMqttStore from "./store/useMqttStore";
import { brokerUrl } from "./constant";

function App() {
  useAuthStore();
  const location = useLocation();

  useEffect(() => {
    handlePageLoadForTracking("location");
  }, [location]);
  
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <div
        onClick={(e) => {
          handleClickForTracking(e);
        }}
      >
        <Router />
      </div>
      <ToastContainer position="bottom-right" autoClose={2000} />
    </QueryClientProvider>
  );
}

export default App;
