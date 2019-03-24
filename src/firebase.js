import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDhVCbO1Dhi_IXeyPI0be2bhlbx2cvQE6I",
  authDomain: "m-city-bb139.firebaseapp.com",
  databaseURL: "https://m-city-bb139.firebaseio.com",
  projectId: "m-city-bb139",
  storageBucket: "m-city-bb139.appspot.com",
  messagingSenderId: "303912881913"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
export { firebase, firebaseMatches, firebasePromotions };
