// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAln-M60jT09ioKNXdOCH06ZRG0tSVvsAI",
  authDomain: "inventory-9096b.firebaseapp.com",
  projectId: "inventory-9096b",
  storageBucket: "inventory-9096b.appspot.com",
  messagingSenderId: "661858178356",
  appId: "1:661858178356:web:aa0832eb0e1b1ae9974161",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
