import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  // 내가 만든 조합, 남이 만든 조합에 따라 버튼 다르게 보이게 하기 (저장-공유-삭제)
  
  return (
    <div>
      <h1>레시피 상세페이지</h1>
      <p>만든 사람</p>
      <p>재료</p>
      <button>저장하기</button>
      <button>공유하기</button>
      <button>삭제하기</button>
    </div>
  );
}

export default RecipeDetail;