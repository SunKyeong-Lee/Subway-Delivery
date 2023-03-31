import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>내가 만들 조합과 찜 목록 보기</div>
      <button onClick={() => navigate("/my-recipe")}>나의 조합 목록</button>
      <div>새로운 나만의 조합 만들어보기</div>
      <button onClick={() => navigate("/new-recipe")}>새로 만들기</button>
      <div>다른 사람이 공유한 조합 살펴보기</div>
      <button onClick={() => navigate("/recipe-share")}>조합 추천</button>
    </div>
  );
}

export default Recipe;