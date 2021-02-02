// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/* Production Config
var firebaseConfig = {
  apiKey: "AIzaSyA5h1LnE61icjtscqjhM82po6-ALHlVyg4",
  authDomain: "cease-project.firebaseapp.com",
  projectId: "cease-project",
  storageBucket: "cease-project.appspot.com",
  messagingSenderId: "1040376864167",
  appId: "1:1040376864167:web:c01717d731005c95eb6a82",
  measurementId: "G-R37MEE68RE"
};
*/

/* Dev Config */
const firebaseConfig = {
  apiKey: "AIzaSyCNPviD4GfavFjtM63k09WXyaI5uQA-KPM",
  authDomain: "cease-project-a8f4b.firebaseapp.com",
  databaseURL: "https://cease-project-a8f4b-default-rtdb.firebaseio.com",
  projectId: "cease-project-a8f4b",
  storageBucket: "cease-project-a8f4b.appspot.com",
  messagingSenderId: "1034440275219",
  appId: "1:1034440275219:web:1ca12eb0814506255b96e6",
  measurementId: "G-SKE8F2M7ZV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// Create references for backend-related items.
const auth = firebase.auth();
const database = firebase.firestore();
//Timestamps for access.
database.settings({ timestampsInSnapshots:true });