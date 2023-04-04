import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "../api/login";

const Navbar = ({ isDisplayed }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser(null);
      }
    });
    return unsubscribe;
  }, [user]);

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>SUBWAY</h1>
      {isDisplayed && (
        <div>
          {user === null ? (
            <button onClick={() => navigate("/login")}>로그인</button>
          ) : (
            <>
              <button onClick={() => navigate("/cart")}>장바구니</button>
              <button onClick={() => logout()}>로그아웃</button>
            </>
          )}
        </div>
      )}
      <hr />
    </nav>
  );
};

export default Navbar;
