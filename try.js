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
  document.getElementById("submit").addEventListener("click", writeInput);
  function writeInput() {
    push(
      ref(db, "quiz/" + topic),
      document.getElementById("input").value.toLowerCase()
    );
  }
}

if (document.title == "Bulletin Homepage") {
  function bar(d) {
    var data = [10, 15, 8];

    new RGraph.Bar({
      id: "cvs",
      data: data,
      options: {
        backgroundGridHlines: false,
        backgroundGridVlines: false,
        backgroundGridBorder: false,
        yaxis: false,
        xaxis: false,
        colors: ["#552586"],
        textSize: 24,
        xaxisLabels: "",
        yaxisLabelsColor: "rgba(235, 216, 195, 1)",
        labelsAbove: true,
        labelsAboveSpecific: d,
        // labelsAboveBackground: 'rgb(253,253,0)'
      },
    }).draw();
  }

  getAllInputs();
  window.addEventListener('resize', getAllInputs);
  document.getElementById("products").addEventListener("change", getAllInputs);
  function getAllInputs() {
    var chosen = document.getElementById("products").value;
    onValue(ref(db, "quiz/" + chosen), (snapshot) => {
      var data = snapshot.val();
      var top3 = []
      if (data != null) {
        axios
          .get("https://quickchart.io/wordcloud", {
            params: {
              text: Object.values(data).join(" "),
              width: window.innerWidth
              // colors: ["#8B8989","#8B6969","#6F4242","#BC8F8F","#CD9B9B","#8B3A3A","#C67171","#802A2A","#C54E4E","#CD5C5C","#DC8C8C","#CD5555","#A52A2A","#8B2323","#8E2323","#A62A2A","#CD3333","#CC3232","#EEB4B4","#BE2625","#8B1A1A","#B22222","#CD2626","#DB2929","#8C1717","#F08080","#EE6363","#EE3B3B","#EE2C2C","#330000","#660000","#800000","#8B0000","#CD0000","#EE0000","#FF0000","#FF3030","#FF3333","#FF4040","#FF6666","#FF6A6A","#FFC1C1","#FFCCCC","#FFFAFA","#A02422"]
              // backgroundColor: 'white'
            },
          })
          .then((response) => {
            // console.log(Object.values(data).join(" "))
            // console.log(response.data)
            document.getElementById("results").innerHTML = response.data;
            var cnt = 0
            for (let elem of document.getElementById("results").children[0]
              .children) {
              // console.log(elem.getAttribute("font-size"));
              if (cnt<3){
                top3.push(elem.textContent)
                cnt +=1
              }
            }
            console.log(RGraph.ObjectRegistry.list())
            bar(["🥈"+top3[1], "🥇"+top3[0], "🥉"+top3[2]])

          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  }
}

if (document.title == "Register") {
  document.getElementById("regis").addEventListener("click", register);
  function register() {
    set(ref(db, "users/" + document.getElementById("username").value), {
      username: document.getElementById("username").value,
      fetus_nickname: document.getElementById("fetus").value,
      duedate: document.getElementById("due").value,
      email: document.getElementById("email").value,
      password: document.getElementById("pw").value,
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
        alert("Good!");
      } else {
        alert("Username/Password entered is invalid");
      }
    });
  }
}
