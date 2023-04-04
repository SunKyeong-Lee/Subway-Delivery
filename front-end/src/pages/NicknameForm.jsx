import { useNavigate } from "react-router-dom";
import { updateDisplayName } from "../api/signup";

const NicknameForm = () => {
  const navigate = useNavigate();

  const displayNameSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    updateDisplayName(formData.get("nickname"));
    navigate("/");
  };

  return (
    <div>
      <h2>가입을 축하합니다</h2>
      <p>사용할 닉네임을 입력해주세요</p>
      <form onSubmit={displayNameSubmit}>
        <input type="text" name="nickname" placeholder="닉네임" />
        <button type="submit">확인</button>
      </form>
    </div>
  );
};

export default NicknameForm;
