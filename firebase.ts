// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "shoppex-193d2.firebaseapp.com",
    projectId: "shoppex-193d2",
    storageBucket: "shoppex-193d2.appspot.com",
    messagingSenderId: "491576571472",
    appId: "1:491576571472:web:c009c1500c60004a7c4355",
    measurementId: "G-6396PMKZGY"
  };

// console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }