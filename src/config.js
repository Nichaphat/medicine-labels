import firebase from "firebase/compat";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB2KY6z_Mqt4MtVAIMiKE6lmFJPi7bDXdQ",
  authDomain: "fir-webapp-f3b87.firebaseapp.com",
  projectId: "fir-webapp-f3b87",
  storageBucket: "fir-webapp-f3b87.appspot.com",
  messagingSenderId: "123808458294",
  appId: "1:123808458294:web:6e98ee634bf4b4b3919a97",
  measurementId: "G-DLR4KFMQ0M"
};

const firebaseConfig = firebase.initializeApp(config)
firebase.firestore()
export const auth = firebase.auth()

export default config;




