// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKQtuxgWrX4wNoWR54o5KmX8qu2JFk4hc",
    authDomain: "learning-project-c1629.firebaseapp.com",
    projectId: "learning-project-c1629",
    storageBucket: "learning-project-c1629.firebasestorage.app",
    messagingSenderId: "232733356062",
    appId: "1:232733356062:web:9adc6899fb02ece802fe0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;