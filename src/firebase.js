import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/firestore';
const firebaseConfig = {
    //Here goes your firebase config
  };
const app = firebase.initializeApp(firebaseConfig)
export const variable = firebase.auth;
export const auth = app.auth()
export const firestore = firebase.firestore();
export default app