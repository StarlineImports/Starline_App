import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQUvUD81Kcnejm7NwlsSdlbP5R6qbf58k",
  authDomain: "starlineimports-25396.firebaseapp.com",
  projectId: "starlineimports-25396",
  storageBucket: "starlineimports-25396.appspot.com",
  messagingSenderId: "80698781539",
  appId: "1:80698781539:web:15605011cacce1063a6d56",
  measurementId: "G-J5QE6GV733",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
