import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'local') {
  firebase.functions().useFunctionsEmulator('http://localhost:5000');
}
