import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    console.log(user);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const userUpdateProfile = (name, image) => {
   return updateProfile(auth.currentUser,{
    displayName: name, 
    photoURL: image
  }) 
  }

  // social login
  const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider);
  }
  const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
        setUser(user)
    })
    return () =>{
        unsubscribe()
    }
  },[])

  const authInfo = {
    createUser,
    user,
    singIn,
    googleLogin,
    githubLogin,
    userUpdateProfile,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
