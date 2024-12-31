import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDEDFq-u6L2BrL5BxAzbmiL3TBdAb-Taoc",
  authDomain: "expo-socratech.firebaseapp.com",
  projectId: "expo-socratech",
  storageBucket: "expo-socratech.firebasestorage.app",
  messagingSenderId: "936229715058",
  appId: "1:936229715058:web:1defcded034daa354e96eb",
  measurementId: "G-NBYZW11SNT",
};

export const app = initializeApp(firebaseConfig);
