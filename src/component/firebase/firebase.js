import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth"; // Import the necessary modules

const firebaseConfig = {
  // Your Firebase config
  apiKey: "AIzaSyDxh9J_jKy5YJNDneAKoDAYfvDAumnZ9gI",
  authDomain: "filmyweb-13700.firebaseapp.com",
  projectId: "filmyweb-13700",
  storageBucket: "filmyweb-13700.appspot.com",
  messagingSenderId: "1072662510959",
  appId: "1:1072662510959:web:4a944c68830abf17637c9a",
  measurementId: "G-WDZK8FH702",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");
export const auth = getAuth(app); // Initialize Firebase Auth

export const signOutUser = () => {
  return signOut(auth); // Return the signOut promise
};

export default app;
