

  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut    } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "<your-config>",
    authDomain: "<your-config>",
    projectId: "<your-config>",
    storageBucket: "<your-config>",
    messagingSenderId: "<your-config>",
    appId: "<your-config>",
    measurementId: "<your-config>"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  }
