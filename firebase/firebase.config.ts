import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPGCXQefJ8SjIv_hobb4ASduhqeTeISpo",
  authDomain: "jovellabay-portfolio.firebaseapp.com",
  projectId: "jovellabay-portfolio",
  storageBucket: "jovellabay-portfolio.appspot.com",
  messagingSenderId: "944381642876",
  appId: "1:944381642876:web:a4339baf8f3208055be1f9",
  measurementId: "G-BK0V3MGQW9",
};

const app = initializeApp(firebaseConfig);
// getAnalytics(app);
// SEND MESSAGE DIRECt
export const storage = getFirestore(app);

// GOOGLE AUTHINCATION
export const googleAuth = getAuth(app);
