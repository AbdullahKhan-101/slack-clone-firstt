import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFu30CfyGJqNr-r9Vewwgub4QZIq30HaU",
  authDomain: "slack-clone-firstt.firebaseapp.com",
  projectId: "slack-clone-firstt",
  storageBucket: "slack-clone-firstt.appspot.com",
  messagingSenderId: "593066540192",
  appId: "1:593066540192:web:8aa0d9d12eff90dc3d1dc5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
