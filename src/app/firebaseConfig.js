import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDw0vNfWcKs8RWL1EX_kO45802_ZNWnxHU",
  authDomain: "uplift-a99d7.firebaseapp.com",
  projectId: "uplift-a99d7",
  storageBucket: "uplift-a99d7.appspot.com",
  messagingSenderId: "928075688512",
  appId: "1:928075688512:web:13e25ea996bcded07c8da5",
  measurementId: "G-4G7XWRQEGW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
