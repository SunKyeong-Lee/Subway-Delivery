import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        이벤트 (슬릭 슬라이더)
      </div>
      <button onClick={() => navigate("/order-menu")}>주문하기</button>
      <button onClick={() => navigate("/recipe")}>조합보기</button>
      <button onClick={() => navigate("/mypage")}>마이 페이지</button>
    </div>
  );
}

export default Home;