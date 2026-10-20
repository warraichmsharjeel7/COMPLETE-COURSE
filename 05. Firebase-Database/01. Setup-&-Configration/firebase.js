
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";
  

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
  export const app = initializeApp(firebaseConfig);