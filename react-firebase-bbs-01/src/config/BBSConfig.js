import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR",
  authDomain: "hello-android-4c3ab.firebaseapp.com",
  databaseURL: "https://hello-android-4c3ab-default-rtdb.firebaseio.com",
  projectId: "hello-android-4c3ab",
  storageBucket: "hello-android-4c3ab.appspot.com",
  messagingSenderId: "702974929013",
  appId: "1:702974929013:web:0adbcce4ebd995d9fdf03c",
  measurementId: "G-9GVEKKQ1J6",
};

// firebase 관련 연결 Connection이 불필요하게 과다하게 연결 생성되는 것을
// 방지하는 코드
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const realDB = firebase.database();
const firestore = firebase.firestore();

export { realDB, firestore };