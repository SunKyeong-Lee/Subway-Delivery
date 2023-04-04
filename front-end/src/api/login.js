import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

/** 이메일 로그인 */
export const loginWithEmail = async (email, password) => {
  const auth = getAuth();

  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return "success";
    })
    .catch((error) => {
      const errorCode = error.code;
      let errorMessage = null;

      if (errorCode === "auth/user-not-found") {
        errorMessage = "해당 이메일을 사용하는 사용자를 찾을 수 없습니다.";
      } else if (errorCode === "auth/invalid-email" || "auth/wrong-password") {
        errorMessage = "이메일 혹은 비밀번호를 확인해주세요.";
      } else if (errorCode === "auth/too-many-requests") {
        errorMessage =
          "비정상적인 활동으로 인해 계정이 일시적으로 차단되었습니다. \n문의하기를 이용해주세요.";
      } else {
        errorMessage =
          "문제가 발생했습니다. 다시 시도해주세요. \n계속해서 문제가 발생할 경우 문의하기를 이용해주세요.";
      }

      return errorMessage;
    });
};

/** 로그인한 유저 */
export const getCurrentUserInfo = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};

/** 로그아웃 */
export const logout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log("로그아웃 성공");
    })
    .catch((error) => {
      // An error happened.
    });
};
