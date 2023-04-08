import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

/** 이메일 회원가입 */
export const signupWithEmail = async (email, password) => {
  const auth = getAuth();

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log("회원가입 완료");
    return "success";
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    // return ..
  }
};

/** 이메일 로그인 */
export const loginWithEmail = async (email, password) => {
  const auth = getAuth();

  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("로그인 성공");
    return "success";
  } 
  catch (error) {
    const errorCode = error.code;
    let errorMessage = null;

    if (errorCode === "auth/user-not-found") {
      errorMessage = "해당 이메일을 사용하는 사용자를 찾을 수 없습니다.";
    } else if (errorCode === "auth/email-already-in-use") {
      errorMessage = "이미 사용하고 있는 이메일입니다."
    } else if (errorCode === "auth/invalid-email" || "auth/wrong-password") {
      errorMessage = "이메일 혹은 비밀번호를 확인해주세요.";
    } else {
      errorMessage = "문제가 발생했습니다. 다시 시도해주세요.";
    }

    console.log("로그인 실패");
    return errorMessage;
  }
};

/** 구글 로그인 */
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  return signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    return "success";
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

/** 유저 상태 체크 */
export const getAuthStateChanged = (callback) => {
  const auth = getAuth();
  return onAuthStateChanged(auth, callback);
};

/** 닉네임(DisplayName) 설정 */
export const updateDisplayName = async (nickname) => {
  const auth = getAuth();

  try {
    await updateProfile(auth.currentUser, { displayName: nickname });
    console.log("닉네임 설정 완료");
    return "success";
  } 
  catch (error) {
    // const errorCode = error.code;
    let errorMessage = "문제가 발생했습니다. 다시 시도해주세요.";
    return errorMessage;
  }
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
