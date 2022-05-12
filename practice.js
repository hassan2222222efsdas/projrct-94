
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDW16xGKRqpAYeKL1pfeRY_ENMtbmxvR7s",
    authDomain: "kwitter-7cf9b.firebaseapp.com",
    databaseURL: "https://kwitter-7cf9b-default-rtdb.firebaseio.com",
    projectId: "kwitter-7cf9b",
    storageBucket: "kwitter-7cf9b.appspot.com",
    messagingSenderId: "717840286335",
    appId: "1:717840286335:web:f9cec594ca364cb684f54a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  function addUser()
  {
      user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
});
  }