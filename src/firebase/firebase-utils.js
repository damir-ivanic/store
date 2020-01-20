import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBaE-TLD6G9VYlbKX__Brek-wL8GF_2VZI",
    authDomain: "store-3b368.firebaseapp.com",
    databaseURL: "https://store-3b368.firebaseio.com",
    projectId: "store-3b368",
    storageBucket: "store-3b368.appspot.com",
    messagingSenderId: "56111346097",
    appId: "1:56111346097:web:4fb9b67385f2af3c140d90",
    measurementId: "G-E2LBS0JE82"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;