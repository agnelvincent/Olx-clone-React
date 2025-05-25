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

// const firebaseConfig = {
//   apiKey: "AIzaSyB-X6YQpfy28aR5wdzXYEkgNTK3oYN4p3E",
//   authDomain: "olxclone-fc145.firebaseapp.com",
//   projectId: "olxclone-fc145",
//   storageBucket: "olxclone-fc145.firebasestorage.app",
//   messagingSenderId: "42469907606",
//   appId: "1:42469907606:web:e3ffe31d453c2175d7f6b7",
//   measurementId: "G-5ZYBHCL2DZ"
// };

  export default firebase.initializeApp(firebaseConfig);
