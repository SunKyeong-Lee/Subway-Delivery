import { useNavigate } from "react-router-dom";

const NewRecipe = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메뉴 만들기</h1>

      <ul>
        <li>재료1</li>
        <li>재료2</li>
        <li>재료3</li>
      </ul>
      <ul>
        <li>재료1</li>
        <li>재료2</li>
        <li>재료3</li>
      </ul>

      <button onClick={() => navigate("/recipe")}>취소</button>
      <button onClick={() => navigate("/my-recipe")}>저장하기</button>
    </div>
  );
}

export default NewRecipe;