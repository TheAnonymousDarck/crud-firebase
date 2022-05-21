// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLe91IM-XgjstCY3TadUokbvYYWI-LJFo",
    authDomain: "contactos-8be01.firebaseapp.com",
    projectId: "contactos-8be01",
    storageBucket: "contactos-8be01.appspot.com",
    messagingSenderId: "2784736967",
    appId: "1:2784736967:web:9ba0ad2b8c799b5f6f70e2",
    measurementId: "G-384VX9SQJK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);