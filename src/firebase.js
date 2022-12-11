import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZXx1ZhPRF5hUddzXJ1nK_NjFmorx1XfA",
  authDomain: "disneyplusclone-c5594.firebaseapp.com",
  projectId: "disneyplusclone-c5594",
  storageBucket: "disneyplusclone-c5594.appspot.com",
  messagingSenderId: "63043894424",
  appId: "1:63043894424:web:098855933cc0e4d62ea4ed"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
