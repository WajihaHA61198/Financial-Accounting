import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4o4bsU5enZ_ZMwnGnSkemr3uzSScHKPI",
  authDomain: "computerized-accounting-4cdb4.firebaseapp.com",
  projectId: "computerized-accounting-4cdb4",
  storageBucket: "computerized-accounting-4cdb4.appspot.com",
  messagingSenderId: "1016385270716",
  appId: "1:1016385270716:web:49376b0cf49ac8595731b9"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }