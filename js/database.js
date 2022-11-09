// https://quickchart.io/documentation/word-cloud-api/ word cloud API
//  https://www.rgraph.net/canvas/bar.html bargraph

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  push,
} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIBTV0ugGqIMp5lfSdUDXhVMg7cQQMiWk",
  authDomain: "prepnancy-c0c9b.firebaseapp.com",
  projectId: "prepnancy-c0c9b",
  storageBucket: "prepnancy-c0c9b.appspot.com",
  messagingSenderId: "56668153455",
  appId: "1:56668153455:web:af3c28b4282093ca598f9a",
  measurementId: "G-X27L846Z32",
  databaseURL:
    "https://prepnancy-c0c9b-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

if (document.title == "Quiz") {
  progressButton.addEventListener("click", writeInput);
  inputField.addEventListener("keyup", function (e) {
    if (e.keyCode == 13) writeInput();
  });
  function writeInput() {
    push(
      ref(db, "quiz/" + document.location.href.split("?")[1].split("=")[1]),
      document.getElementById("inputField").value.toLowerCase()
    );
  }
}

if (document.title == "Community Contributions") {
  getAllInputs();
  document.getElementById("products").addEventListener("change", getAllInputs);
  function getAllInputs() {
    var chosen = document.getElementById("products").value;
    onValue(ref(db, "quiz/" + chosen), (snapshot) => {
      var data = snapshot.val();
      var top3 = [];
      if (data != null) {
        axios
          .get("https://quickchart.io/wordcloud", {
            params: {
              text: Object.values(data).join(" "),
              // backgroundColor: 'white'
              width: Number(window.innerWidth/2)
            },
          })
          .then((response) => {
            document.getElementById("results").innerHTML = response.data;
            var cnt = 0;
            for (let elem of document.getElementById("results").children[0]
              .children) {
              if (cnt < 3) {
                top3.push(elem.textContent);
                cnt += 1;
              }
            }
            document.getElementById("podium0").innerHTML = "🥇" + "<br>&nbsp" + top3[0] + "&nbsp";
            document.getElementById("podium1").innerHTML = "🥈" + "<br>&nbsp" + top3[1] + "&nbsp";
            document.getElementById("podium2").innerHTML = "🥉" + "<br>&nbsp" + top3[2] + "&nbsp";
            // bar(["🥈"+top3[1], "🥇"+top3[0], "🥉"+top3[2]])
          })
          .catch((error) => {
            // console.log(error.message);
          });
      }
    });
  }
}

if (document.title == "Login") {
  document.getElementById("login").addEventListener("click", validate);
  function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    onValue(ref(db, "users/" + username), (snapshot) => {
      var data = snapshot.val();
      if (data != null && data.password == password) {
        document.location.href = 'homepage.html'
        sessionStorage.setItem("username", username);
      } else {
        alert("Username/Password entered is invalid");
      }
    });
  }
  regis.addEventListener("click", register);
  function register() {
    push(
      ref(db, "users/" + document.getElementById("susername").value), {
      username: document.getElementById("susername").value,
      fetus_nickname: document.getElementById("fetus").value,
      duedate: document.getElementById("due").value,
      email: document.getElementById("email").value,
      password: document.getElementById("pw").value,
    });
    document.location.href = 'index.html'
  }
}

if (document.title == "Profile"){
  var user = sessionStorage.getItem("username")
  function displayInfo() {
    onValue(ref(db, "users/" + user), (snapshot) => {
    var data = snapshot.val();
    document.getElementById('username').setAttribute('value',user)
    document.getElementById('fetus').setAttribute('value',data.fetus_nickname)
    document.getElementById('due').setAttribute('value',data.duedate)
    document.getElementById('email').setAttribute('value',data.email)
    document.getElementById('pw').setAttribute('value',data.password)
  })
  }
  displayInfo()
  document.getElementsByTagName('button')[0].addEventListener('click',edit)
  function edit() {
    document.getElementsByTagName('button')[0].removeEventListener('click',edit)
    document.getElementsByTagName('button')[0].innerText = "Save"
    var inputs = document.querySelectorAll(".input-field");
    inputs.forEach((inp) => {
      inp.removeAttribute('readonly');
    });
    document.getElementsByTagName('button')[0].addEventListener('click',save)
  }
  function save(){
    document.getElementsByTagName('button')[0].removeEventListener('click',save)
    set(ref(db, "users/" + document.getElementById("username").value), {
      username: document.getElementById("username").value,
      fetus_nickname: document.getElementById("fetus").value,
      duedate: document.getElementById("due").value,
      email: document.getElementById("email").value,
      password: document.getElementById("pw").value,
    })
    sessionStorage.setItem("username", username)
    var user = sessionStorage.getItem("username")
    displayInfo()
    document.getElementsByTagName('button')[0].innerText='Edit Profile'
    var inputs = document.querySelectorAll(".input-field");
    inputs.forEach((inp) => {
      inp.setAttribute('readonly','')
    })
    document.getElementById('updated').innerText = 'Information Updated Successfully'
    document.getElementsByTagName('button')[0].addEventListener('click',edit)
  }
  
}
