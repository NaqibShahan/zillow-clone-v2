  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAXDymfnIXU5_mQE5AMDlazDyWVuZTso7s",
    authDomain: "instagram-clone-86efe.firebaseapp.com",
    databaseURL: "https://instagram-clone-86efe-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-86efe",
    storageBucket: "instagram-clone-86efe.appspot.com",
    messagingSenderId: "918651844739",
    appId: "1:918651844739:web:c4c67ced7fbc954f5643b6",
    measurementId: "G-5ZYXDT83N3"
  });

  const db = firebaseAPp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage};
