import { useNavigate } from "react-router-dom";

const OrderStore = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>주문하기 - 매장 선택</h1>
      <ul>
        <li>매장1</li>
        <li>매장2</li>
        <li>매장3</li>
      </ul>

      <button onClick={() => navigate("/")}>취소</button>
      <button onClick={() => navigate("/cart")}>장바구니</button>
    </div>
  );
}

export default OrderStore;