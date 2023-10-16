//import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOWPvC6NBlYz4ClUBUHzxd3PFRcEZPFS8",
  authDomain: "react-firebase-26020.firebaseapp.com",
  projectId: "react-firebase-26020",
  storageBucket: "react-firebase-26020.appspot.com",
  messagingSenderId: "239891146145",
  appId: "1:239891146145:web:72953e4e5d602fdb3617e0"
};

//Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);