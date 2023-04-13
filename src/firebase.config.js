// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBprlQd5UaQNqJmhFTlB2yFCYP0Zwah5xQ",
  authDomain: "house-marketplace-app-acd09.firebaseapp.com",
  projectId: "house-marketplace-app-acd09",
  storageBucket: "house-marketplace-app-acd09.appspot.com",
  messagingSenderId: "723185392051",
  appId: "1:723185392051:web:66b0571e515dadc01b93c6"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()