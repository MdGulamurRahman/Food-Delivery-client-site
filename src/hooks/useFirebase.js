import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    FacebookAuthProvider,
    GithubAuthProvider, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
 } from "firebase/auth";
import initAuthentication from '../Firebase/firebase.init';

initAuthentication()
const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const googleSignIn = () =>{
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
       .then((result) =>{
           setUser(result.user)
           setIsLoading(false)
       })
      
    }
    //get currently sign in user
    useEffect(()=>{
        onAuthStateChanged(auth, (signInUser) => {
            if (signInUser) {
                setUser(signInUser)
            } 
            setIsLoading(false)
          });
    },[])

    //sign out
  const logOut = ()=>{
    setIsLoading(true)
  signOut(auth).then(() => {
      setUser({})
  })
  .finally(()=> setIsLoading(false))
  .catch((error) => {
      setError(error.message)
    });
    
}
    return {
        user,
        error,
        logOut,
        googleSignIn,
        isLoading,
        setError
    }
};

export default useFirebase;