// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAF88zjGx65f1e5ocKOnOgnl6Nq3TCKx8o",
  authDomain: "lab-201-e9a5a.firebaseapp.com",
  projectId: "lab-201-e9a5a",
  storageBucket: "lab-201-e9a5a.appspot.com",
  messagingSenderId: "72477321976",
  appId: "1:72477321976:web:f59c76cb8e61708ce3a90d",
  measurementId: "G-E4XBJ0VRK2"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

 