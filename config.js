import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCjIfH9aHpWCgrht7T9eBu3NsAwgFDF2vM",
    authDomain: "mun-website-1f166.firebaseapp.com",
    projectId: "mun-website-1f166",
    storageBucket: "mun-website-1f166.appspot.com",
    messagingSenderId: "720253159641",
    appId: "1:720253159641:web:65e0d6b1a08715b31ad6c8",
    measurementId: "G-6MMX38D188"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();