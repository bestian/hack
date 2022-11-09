import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database' 
import { getAuth } from 'firebase/auth'

// Get a Firestore instance
const fb = initializeApp({
    apiKey: 'AIzaSyCpGiPsWH6Ta8K_inFSUjUrdnB6J_F9PRM',
    authDomain: 'hack-84e1c.firebaseapp.com',
    projectId: 'hack-84e1c',
    storageBucket: 'hack-84e1c.appspot.com',
    messagingSenderId: '892474981261',
    appId: '1:892474981261:web:cb5224b361f5df46125bc4',
    measurementId: 'G-KB6KCXSXVY',
  });

export const db = getDatabase(fb)
export const auth = getAuth(fb)
