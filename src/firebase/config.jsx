import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBG6-8JnZcRzS5i-xF5TGUVu4iMLqxVGAo",
  authDomain: "fir-7ca55.firebaseapp.com",
  projectId: "fir-7ca55",
  storageBucket: "fir-7ca55.firebasestorage.app",
  messagingSenderId: "89009965129",
  appId: "1:89009965129:web:ddc0f40024638d1a069798",
  measurementId: "G-5SQ5B158F0"
};

  export default firebase.initializeApp(firebaseConfig);
