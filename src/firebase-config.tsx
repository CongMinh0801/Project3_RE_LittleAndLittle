import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
 
const firebaseConfig = {
    apiKey: "AIzaSyAupVEIQUken-S_QH0t7Cz31SiZcz004M4",
    authDomain: "little-and-little-5a53a.firebaseapp.com",
    projectId: "little-and-little-5a53a",
    storageBucket: "little-and-little-5a53a.appspot.com",
    messagingSenderId: "593553754032",
    appId: "1:593553754032:web:aff28ee41fee02670a7875",
    measurementId: "G-92LZM5MEJH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);