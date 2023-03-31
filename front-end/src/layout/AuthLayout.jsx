const AuthLayout = ({ children }) => {
  // 로그인 체크

  return (
    <div>
      <p>로그인이 필요한 페이지입니다.</p>
      { children }
    </div>
  );
}

export default AuthLayout;