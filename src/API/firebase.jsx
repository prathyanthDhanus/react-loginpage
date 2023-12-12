
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDps4ukjwcZp2MaxPRhyezIUFqfvj5cHrU",
  authDomain: "userauth-fa662.firebaseapp.com",
  projectId: "userauth-fa662",
  storageBucket: "userauth-fa662.appspot.com",
  messagingSenderId: "611744068907",
  appId: "1:611744068907:web:9149e324b91092990c816e",
  measurementId: "G-MF301JHB7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}