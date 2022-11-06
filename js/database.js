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

if (document.title == "Bulletin Homepage") {
  // function bar(d) {
  //   console.log(d)
  //   var data = [10, 15, 8];

  //   new RGraph.Bar({
  //     id: "cvs",
  //     data: data,
  //     options: {
  //       backgroundGridHlines: false,
  //       backgroundGridVlines: false,
  //       backgroundGridBorder: false,
  //       yaxis: false,
  //       xaxis: false,
  //       colors: ["#552586"],
  //       textSize: 24,
  //       xaxisLabels: "",
  //       yaxisLabelsColor: "rgba(235, 216, 195, 1)",
  //       labelsAbove: true,
  //       labelsAboveSpecific: d,
  //       // labelsAboveBackground: 'rgb(253,253,0)'
  //     },
  //   }).draw();
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
            },
          })
          .then((response) => {
            // console.log(Object.values(data).join(" "))
            // console.log(response.data)
            document.getElementById("results").innerHTML = response.data;
            var cnt = 0;
            for (let elem of document.getElementById("results").children[0]
              .children) {
              console.log(elem.getAttribute("font-size"));
              if (cnt < 3) {
                top3.push(elem.textContent);
                cnt += 1;
              }
            }
            document.getElementById("podium0").innerText = "🥇" + top3[0];
            document.getElementById("podium1").innerText = "🥈" + top3[1];
            document.getElementById("podium2").innerText = "🥉" + top3[2];
            // bar(["🥈"+top3[1], "🥇"+top3[0], "🥉"+top3[2]])
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  }
}

// if (document.title == "Register") {
//   document.getElementById("regis").addEventListener("click", register);
//   function register() {
//     set(ref(db, "users/" + document.getElementById("username").value), {
//       username: document.getElementById("username").value,
//       fetus_nickname: document.getElementById("fetus").value,
//       duedate: document.getElementById("due").value,
//       email: document.getElementById("email").value,
//       password: document.getElementById("pw").value,
//     });
//   }
// }

if (document.title == "Login") {
  document.getElementById("login").addEventListener("click", validate);
  function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    onValue(ref(db, "users/" + username), (snapshot) => {
      var data = snapshot.val();
      if (data != null && data.password == password) {
        alert("Good!");
      } else {
        alert("Username/Password entered is invalid");
      }
    });
  }
  document.getElementById("regis").addEventListener("click", register);
  function register() {
    set(ref(db, "users/" + document.getElementById("susername").value), {
      username: document.getElementById("susername").value,
      fetus_nickname: document.getElementById("fetus").value,
      duedate: document.getElementById("due").value,
      email: document.getElementById("email").value,
      password: document.getElementById("pw").value,
    });
  }
}

// if (document.title == "Calender"){
//   function writeBooking() {
//     push(
//       ref(db, "calender/" + ), //user
//       document.getElementById("inputField").value.toLowerCase() // booking
//     );
//   }
// }