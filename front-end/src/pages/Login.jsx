import { useNavigate } from "react-router-dom";
import { loginWithEmail, loginWithGoogle } from "../api/auth";
import { useState } from "react";

const Login = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const emailLoginSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const loginResult = await loginWithEmail(
      formData.get("id"),
      formData.get("password")
    );

    if (loginResult === "success") {
      navigate("/");
    } else {
      setIsDisplayed(true);
      setErrorMessage(loginResult);
    }
  };

  const googleLoginHandler = async () => {
    const loginResult = await loginWithGoogle();

    if (loginResult === "success") {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={emailLoginSubmit}>
        <input type="text" name="id" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">로그인</button>
      </form>
      {isDisplayed && <div>{errorMessage}</div>}
      <div>
        <button>비밀번호 찾기</button>
        <button onClick={() => navigate("/signup")}>회원가입</button>
      </div>

      <button onClick={googleLoginHandler}>Google로 로그인</button>
    </div>
  );
};

export default Login;
