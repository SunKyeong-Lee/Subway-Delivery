import { useNavigate } from "react-router-dom";
import { loginWithEmail } from "../api/login";

const Login = () => {
  const navigate = useNavigate();

  const emailLoginSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    loginWithEmail(formData.get("id"), formData.get("password"));
    navigate("/");
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={emailLoginSubmit}>
        <input type="text" name="id" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      <div>
        <button>비밀번호 찾기</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </div>

      <button>Google로 로그인</button>
    </div>
  );
};

export default Login;
