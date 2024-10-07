// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import default from './../../tailwind.config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI_YX4kzjVjIDL1oVOldrpjYFyynGhpM0",
  authDomain: "about-me-fd42c.firebaseapp.com",
  projectId: "about-me-fd42c",
  storageBucket: "about-me-fd42c.appspot.com",
  messagingSenderId: "249301826024",
  appId: "1:249301826024:web:0d41d2f0a942da594d0c5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig