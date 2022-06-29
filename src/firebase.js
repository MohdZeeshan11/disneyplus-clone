import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJBytruORO3925SpWiNrsn0D2AamFPTuI",
  authDomain: "disneyplus-clone-c7949.firebaseapp.com",
  projectId: "disneyplus-clone-c7949",
  storageBucket: "disneyplus-clone-c7949.appspot.com",
  messagingSenderId: "1083605783828",
  appId: "1:1083605783828:web:d45638eb3a680487659e01",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
