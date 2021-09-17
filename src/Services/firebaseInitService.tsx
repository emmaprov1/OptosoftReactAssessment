import firebase from 'firebase/compat/'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCdIFYpd-gsmI6Uw9dYQvPcG_fiK9Fzn84",
  authDomain: "stagging-78531.firebaseapp.com",
  projectId: "stagging-78531",
  storageBucket: "stagging-78531.appspot.com",
  messagingSenderId: "478049252121",
  appId: "1:478049252121:web:a2b312ee12d246d3c38b88"
};

firebase.initializeApp(firebaseConfig)
export default firebase
