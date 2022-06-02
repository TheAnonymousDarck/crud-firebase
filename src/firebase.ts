import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVhVcXK0bNgwQSuX1WJnKRbNA-v5clv3k",
    authDomain: "contactos-94267.firebaseapp.com",
    projectId: "contactos-94267",
    storageBucket: "contactos-94267.appspot.com",
    messagingSenderId: "820938854415",
    appId: "1:820938854415:web:a4a1f6a82343d27703137a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const contactsDB = collection(db, "contacts");

export default contactsDB; 