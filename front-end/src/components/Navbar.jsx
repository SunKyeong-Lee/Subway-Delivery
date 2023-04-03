import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { logout } from "../api/login";

const Navbar = () => {
  const navigate = useNavigate();

  // 로그인 페이지일 때 버튼 안보이게 하기
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>SUBWAY</h1>
      {user === null ? (
        <button onClick={() => navigate("/login")}>로그인</button>
      ) : (
        <>
          <button onClick={() => navigate("/cart")}>장바구니</button>
          <p>어서오세요 {user.email}님</p>
        </>
      )}
      {/* <button onClick={() => navigate("/cart")}>장바구니</button>
      <button onClick={() => navigate("/login")}>로그인</button> */}
      <button onClick={() => logout()}>로그아웃</button>
    </nav>
  );
};

export default Navbar;
