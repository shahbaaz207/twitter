import firebase from 'firebase' 
var firebaseConfig = {
    apiKey: "AIzaSyAalJc_bW0ctHUvPMC6bW55sq9oK_QmzGw",
    authDomain: "twitter-clone-39083.firebaseapp.com",
    databaseURL: "https://twitter-clone-39083.firebaseio.com",
    projectId: "twitter-clone-39083",
    storageBucket: "twitter-clone-39083.appspot.com",
    messagingSenderId: "935243575156",
    appId: "1:935243575156:web:53742bb283f88776c7c621"
  };
  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);

 const db=firebaseApp.firestore()
 const provider=new firebase.auth.GoogleAuthProvider()
 const auth =firebase.auth()
 const storage=firebase.storage()

 export{db,provider,storage,auth}