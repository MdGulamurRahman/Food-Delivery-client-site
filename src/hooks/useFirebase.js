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
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const auth = getAuth();
    //all state
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [photo, setPhoto] = useState('')
    const [number, setNumber] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    //google Sign In
    const googleSignIn = () =>{
        setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    // facebook sign in
    const facebookSignIn = ()=>{
        setIsLoading(true)
       return signInWithPopup(auth, facebookProvider)
    }
    // github sign in
    const githubSignIn = ()=>{
        setIsLoading(true)
       return signInWithPopup(auth, githubProvider)
    }
    //Sign in a user with an email address and password
    const signInEmailAndPass = e =>{
        setIsLoading(true)
        e.preventDefault()
      signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user)
    })
    .finally(()=> setIsLoading(false))
    .catch(err => {
        setError(err.message)
    })
    }
    // Create a password-based account
    const registerHandler = e =>{
        setIsLoading(true)
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            setUser(result.user)
            profileUpdate()
            alert('user has been created')
        })
        .finally(()=> setIsLoading(false))
        .catch(err => {
            setError(err.message)
        })
    }
    //update your profile
    const profileUpdate = ()=>{
        setIsLoading(true)
        updateProfile(auth.currentUser, {
            displayName:name, 
            photoURL: photo,
            number: number
          })
          .then(() => { })
          .finally(()=> setIsLoading(false))
          .catch(err => {
            setError(err.message)
        })   
    }




    //get email
    const getEmail = e =>{
        setEmail(e.target.value)
    }
    //get password
    const getPassword = e =>{
        setPassword(e.target.value)
    }
    //get displayName
    const getName = e =>{
        setName(e.target.value)
    }
    //get photoURL
    const getPhoto = e =>{
        setPhoto(e.target.value)
    }
    //get number
    const getNumber = e =>{
        setNumber(e.target.value)
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
        facebookSignIn,
        googleSignIn,
        githubSignIn,
        signInEmailAndPass,
        getEmail,
        getPassword,
        registerHandler,
        getName,
        getPhoto,
        getNumber,
        isLoading,
        setIsLoading,
        setError
    }
};

export default useFirebase;