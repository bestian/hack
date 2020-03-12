import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase.initializeApp(
  {
    apiKey: 'AIzaSyCB0ld6l5VUuoc4Xodym9aVIw_pAe1Ho2U',
    authDomain: 'hack-bestian.firebaseapp.com',
    databaseURL: 'https://hack-bestian.firebaseio.com',
    projectId: 'hack-bestian',
    storageBucket: 'hack-bestian.appspot.com',
    messagingSenderId: '100244779785',
    appId: '1:100244779785:web:8975e15ed48f299ae2d9d8',
    measurementId: 'G-NXRRCJB510' }
).database()

export const chatsRef = db.ref('chats')
