import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

/** 이메일 로그인 */
export const loginWithEmail = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("로그인 성공");
      console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      // console.log(errorCode, errorMessage);
    });
};

/** 로그인한 유저 */
export const getCurrentUserInfo = () => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
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
