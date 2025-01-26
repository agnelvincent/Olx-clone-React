import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAKBUYrWP-XVL9TiOfXQgK9TfM67WbHyT8",
    authDomain: "olxclone-9a0fe.firebaseapp.com",
    projectId: "olxclone-9a0fe",
    storageBucket: "olxclone-9a0fe.firebasestorage.app",
    messagingSenderId: "728563717800",
    appId: "1:728563717800:web:f9577a64cab10a3565549d"
  };

  export default firebase.initializeApp(firebaseConfig);
