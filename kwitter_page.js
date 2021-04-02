
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyAr7lc6boBAUinjs0oSoLW1MSgITiITHYo",
      authDomain: "meme-atob.firebaseapp.com",
      databaseURL: "https://meme-atob-default-rtdb.firebaseio.com",
      projectId: "meme-atob",
      storageBucket: "meme-atob.appspot.com",
      messagingSenderId: "429488617509",
      appId: "1:429488617509:web:9d23fc62185644ae0167cc"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("username")
room_name = localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }

getData();
function logout(){
localStorage.removeItem("room_name")
localStorage.removeItem("user_name")
window.location = "index.html"
}


function send(){

msg = document.getElementById("message").value
firebase.database().ref(room_name).push({
      likes:0,
      message:msg,
      user:user_name
})
document.getElementById("message").value = ""
}