import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      console.warn("Google Analytics not loaded!");
      return;
    }
    window.gtag("config", "G-HL60W23CDJ", {
      page_path: location.pathname,
    });
  }, [location]);
};

export default useGoogleAnalytics;


