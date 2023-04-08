import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthStateChanged, logout } from "../api/auth";

const Navbar = ({ isDisplayed }) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAuthStateChanged((user) =>
      user ? setIsLogged(true) : setIsLogged(false)
    );
  }, [isLogged]);

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>SUBWAY</h1>
      {isDisplayed && (
        <div>
          {isLogged ? (
            <>
              <button onClick={() => navigate("/cart")}>장바구니</button>
              <button onClick={() => logout()}>로그아웃</button>
            </>
          ) : (
            <button onClick={() => navigate("/login")}>로그인</button>
          )}
        </div>
      )}
      <hr />
    </nav>
  );
};

export default Navbar;
