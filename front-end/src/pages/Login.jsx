const Login = () => {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <form>
        <input type="text" name="id" placeholder="이메일" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit">로그인하기</button>
      </form>
      <div>회원가입 ㅣ 아이디찾기 ㅣ 비밀번호 찾기</div>

      <button>Google로 로그인</button>
    </div>
  );
};

export default Login;
