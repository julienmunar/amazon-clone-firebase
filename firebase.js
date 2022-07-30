
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC-Y5bzuvmZb0n7ZZJYvJ6sHEuqNTck5Xg",
    authDomain: "clone-90a62.firebaseapp.com",
    projectId: "clone-90a62",
    storageBucket: "clone-90a62.appspot.com",
    messagingSenderId: "851504847389",
    appId: "1:851504847389:web:bc7ddbea7d2d3cf13b44f4"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db}