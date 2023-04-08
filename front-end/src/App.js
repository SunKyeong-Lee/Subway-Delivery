import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/login" || location.pathname === "/nickname-form"
      ? setIsDisplayed(false)
      : setIsDisplayed(true);
  }, [location.pathname]);

  // 로그인 처리하는 동안 로딩

  return (
    <>
      <Navbar isDisplayed={isDisplayed}/>
      <Outlet/>
    </>
  );
}

export default App;
