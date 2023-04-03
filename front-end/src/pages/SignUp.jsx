import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();

  const signupSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("id");
    const password = formData.get("password");
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ..
        console.log(user);
        alert("회원가입이 완료");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };

  // 비밀번호 확인 input, 다름 표시 문구 추가 >> 다르면 회원가입이 안되도록 하기
  // 가입축하 메세지 + 홈 이동

  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={signupSubmit}>
        <input type="text" name="id" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        {/* <input type="text" name="nickname" placeholder="닉네임" /> */}
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default SignUp;
