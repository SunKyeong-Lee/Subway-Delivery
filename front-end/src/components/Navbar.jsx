import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <h1 onClick={() => navigate("/")}>SUBWAY</h1>
      <button onClick={() => navigate("/login")}>로그인</button>
      <button onClick={() => navigate("/cart")}>장바구니</button>
    </nav>
  );
}

export default Navbar;