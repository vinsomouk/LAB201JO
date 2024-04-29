import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAF88zjGx65f1e5ocKOnOgnl6Nq3TCKx8o",
  authDomain: "lab-201-e9a5a.firebaseapp.com",
  databaseURL: "https://lab-201-e9a5a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lab-201-e9a5a",
  storageBucket: "lab-201-e9a5a.appspot.com",
  messagingSenderId: "72477321976",
  appId: "1:72477321976:web:f59c76cb8e61708ce3a90d",
  measurementId: "G-E4XBJ0VRK2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

export { auth };