import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>장바구니</h1>
      <p>메뉴</p>
      <p>배송비</p>
      <p>주소지, 상세주소</p>
      <p>배송 요청 사항</p>
      <p>결제 금액</p>
      <button onClick={() => navigate(-1)}>취소</button>
      <button>주문하기</button>
    </div>
  );
}

export default Cart;