// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkYgji7WIBuQi6hnsjA42TPGioXRwK16s",
    authDomain: "nextgen-car-warehouse.firebaseapp.com",
    projectId: "nextgen-car-warehouse",
    storageBucket: "nextgen-car-warehouse.appspot.com",
    messagingSenderId: "906491817663",
    appId: "1:906491817663:web:ee7e8ab5924b007dd6a00a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;