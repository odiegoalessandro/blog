import firebase from "firebase/compat/app"
import "firebase/compat/database"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBtUQX8Vmbzv8tu1ToMnYCFTLGwPS3oMJ8",
  authDomain: "blog-22644.firebaseapp.com",
  databaseURL: "https://blog-22644-default-rtdb.firebaseio.com",
  projectId: "blog-22644",
  storageBucket: "blog-22644.appspot.com",
  messagingSenderId: "981827459951",
  appId: "1:981827459951:web:532368aa77d4b5094da69a"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}else {
  firebase.app(); // if already initialized, use that one
}

const database = firebase.database()
const auth = firebase.auth()

export { firebase, database, auth }