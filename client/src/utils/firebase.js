
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-57759.firebaseapp.com",
  projectId: "fir-57759",
  storageBucket: "fir-57759.firebasestorage.app",
  messagingSenderId: "376471463062",
  appId: "1:376471463062:web:89dfbd9d517c3b06008eb7"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}