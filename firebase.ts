// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkRNeF5RW7y822Nt7UxEKqyZZlx0q0MUU",
  authDomain: "netflix-5d671.firebaseapp.com",
  projectId: "netflix-5d671",
  storageBucket: "netflix-5d671.appspot.com",
  messagingSenderId: "446737003780",
  appId: "1:446737003780:web:372c23dfd2cf046edf0c51",
}
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }