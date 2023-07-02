import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBYZDx86xnwHY_4Y1nzJguCOtfNctWeiTk",
  authDomain: "vault-d1fda.firebaseapp.com",
  projectId: "vault-d1fda",
  storageBucket: "vault-d1fda.appspot.com",
  messagingSenderId: "443194609592",
  appId: "1:443194609592:web:6aa8e9ddd3e1c6765d094d",
  measurementId: "G-CTTJG5RRDF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);