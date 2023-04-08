import { useNavigate } from "react-router-dom";
import { updateDisplayName } from "../api/auth";
import { useState } from "react";

const NicknameForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const displayNameSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const nickname = formData.get("nickname");

    if (nickname.trim() === "") {
      setErrorMessage("입력란이 비어있습니다. 닉네임을 입력해주세요.");
      return;
    }

    const updateResult = await updateDisplayName(nickname);
    // 서버 - 닉네임 중복 판별 추가하기

    if (updateResult === "success") {
      navigate("/");
    } else {
      setErrorMessage(updateResult);
    }
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <p>가입을 축하합니다</p>
      <p>사용할 닉네임을 입력해주세요</p>
      <form onSubmit={displayNameSubmit}>
        <input type="text" name="nickname" placeholder="닉네임" />
        <button type="submit">확인</button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default NicknameForm;
