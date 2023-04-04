import { useNavigate } from "react-router-dom";

const OrderMenu = () => {
  const navigate = useNavigate();

  // 선택했을 때만 다음 페이지로 넘어가도록하기
  // 장바구니 담았을 때 개수와 가격이 보이도록 만들기

  return (
    <div>
      <h1>주문하기 - 메뉴 선택</h1>
      <button>내가 만든 조합</button>
      <button>찜한 조합</button>
      <button>새로운 레시피 만들기</button>
      <ul>
        {/** 옵션변경: 단품/세트 변경, 쿠키/음료 변경, 개수 변경 */}
        <li>메뉴1</li>
        <li>메뉴2</li>
        <li>메뉴3</li>
      </ul>
      <button onClick={() => navigate("/")}>취소</button>
      <button onClick={() => navigate("/order-store")}>매장 선택하기</button>
    </div>
  );
}

export default OrderMenu;