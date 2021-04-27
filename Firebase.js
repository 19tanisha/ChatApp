
import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCE__5s-M-9-63BbQKyfOJrND5_-3BWI4k",
    authDomain: "signal-aa96e.firebaseapp.com",
    projectId: "signal-aa96e",
    storageBucket: "signal-aa96e.appspot.com",
    messagingSenderId: "177241742917",
    appId: "1:177241742917:web:14168f6485560c24924d2c"
  };

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
export { db, auth };