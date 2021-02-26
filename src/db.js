import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

// Get a Firestore instance
const fb = firebase
  .initializeApp({
    apiKey: 'AIzaSyCpGiPsWH6Ta8K_inFSUjUrdnB6J_F9PRM',
    authDomain: 'hack-84e1c.firebaseapp.com',
    projectId: 'hack-84e1c',
    storageBucket: 'hack-84e1c.appspot.com',
    messagingSenderId: '892474981261',
    appId: '1:892474981261:web:cb5224b361f5df46125bc4',
    measurementId: 'G-KB6KCXSXVY',
  });

export const db2 = fb.database();
export const db = fb.firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true });
