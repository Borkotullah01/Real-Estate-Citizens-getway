// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVez265iB6rVuaEDBu-XTW_rAPY9Q_WR4",
  authDomain: "real-estate-citizens-getway.firebaseapp.com",
  projectId: "real-estate-citizens-getway",
  storageBucket: "real-estate-citizens-getway.firebasestorage.app",
  messagingSenderId: "803105622633",
  appId: "1:803105622633:web:b4a8fcb2e19dcb29b2b0f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);