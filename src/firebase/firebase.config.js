// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbuiVhs3cofTQ3qgAKshjUgWoV0te0ySY",
  authDomain: "real-state-assist-9.firebaseapp.com",
  projectId: "real-state-assist-9",
  storageBucket: "real-state-assist-9.appspot.com",
  messagingSenderId: "741012589195",
  appId: "1:741012589195:web:85a5aace778d6aef9b628e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth