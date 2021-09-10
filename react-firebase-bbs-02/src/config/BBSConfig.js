import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0BaZBMjUrGR5Zk4wyaZeII-GOOds5VV0",
  authDomain: "hello-android-41e92.firebaseapp.com",
  databaseURL: "https://hello-android-41e92-default-rtdb.firebaseio.com",
  projectId: "hello-android-41e92",
  storageBucket: "hello-android-41e92.appspot.com",
  messagingSenderId: "748367227137",
  appId: "1:748367227137:web:b4eba756b69c5a4fa3d300",
  measurementId: "G-BX8R4M2FWW",
};

// firebase 관련 연결 Connection이 불필요하게 과다하게 연결 생성되는 것을
// 방지하는 코드
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const realDB = firebase.database();
const firestore = firebase.firestore();

export { realDB, firestore };
