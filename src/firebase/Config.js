//  import * as  firebase from 'firebase'
// import {app} from 'firebase';
import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCECwDYxZwXWb_dvblbpUk-Hc1SaMaWy2A",
    authDomain: "evernote-ed9ee.firebaseapp.com",
    projectId: "evernote-ed9ee",
    storageBucket: "evernote-ed9ee.appspot.com",
    messagingSenderId: "1001401364647",
    appId: "1:1001401364647:web:e43db1b3ce46d2fe0d6b82",
    measurementId: "G-GWNQQH0F0D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

   
export const projectFirestore = firebase.firestore();
export const currentTimestamp = firebase.firestore.FieldValue.serverTimestamp();

   



  

  