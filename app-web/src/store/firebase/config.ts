import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlfNnvBVcsbgt_eYlIKul3qAHkxLqLK8o",
  authDomain: "nearvibe-8ad97.firebaseapp.com",
  projectId: "nearvibe-8ad97",
  storageBucket: "nearvibe-8ad97.appspot.com", // 🔧 corregido
  messagingSenderId: "861564947336",
  appId: "1:861564947336:web:d3e73eb7c3fe4262a5883d",
  measurementId: "G-HMQJDPF5RK",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
