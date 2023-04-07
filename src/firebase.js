// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ4g9QRa08Iu0lT3d-XY_usz9okITgtug",
  authDomain: "flickers-1837d.firebaseapp.com",
  projectId: "flickers-1837d",
  storageBucket: "flickers-1837d.appspot.com",
  messagingSenderId: "977539499946",
  appId: "1:977539499946:web:bac316f8935bd3f3630dd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app