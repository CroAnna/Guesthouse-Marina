import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ behavior: "auto", top: 0 }); 
    // or behavior: "smooth"
  }, [pathname]);

  return null;
}
