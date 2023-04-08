import { useNavigate } from "react-router-dom";
import { signupWithEmail } from "../api/auth";

const SignUp = () => {
  const navigate = useNavigate();

  const signupSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const signupResult = await signupWithEmail(
      formData.get("id"),
      formData.get("password")
    );

    if (signupResult === "success") {
      navigate("/nickname-form");
    }
  };

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={signupSubmit}>
        <input type="text" name="id" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
