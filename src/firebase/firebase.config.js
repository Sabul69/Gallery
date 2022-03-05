import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCZXhR9kICxjEcdKJaRE2E0ykePmHH_Mww",
  authDomain: "login-redux-final.firebaseapp.com",
  projectId: "login-redux-final",
  storageBucket: "login-redux-final.appspot.com",
  messagingSenderId: "443044169569",
  appId: "1:443044169569:web:401ea1d6a679f00e0ce720"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export{db, googleProvider, firebase}