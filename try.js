import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
  import { getDatabase, ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAIBTV0ugGqIMp5lfSdUDXhVMg7cQQMiWk",
            authDomain: "prepnancy-c0c9b.firebaseapp.com",
            projectId: "prepnancy-c0c9b",
            storageBucket: "prepnancy-c0c9b.appspot.com",
            messagingSenderId: "56668153455",
            appId: "1:56668153455:web:af3c28b4282093ca598f9a",
            measurementId: "G-X27L846Z32",
            databaseURL: "https://prepnancy-c0c9b-default-rtdb.asia-southeast1.firebasedatabase.app/"
          };

        // Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase()
if (document.title=="Quiz"){
    document.getElementById("submit").addEventListener("click",writeInput)
    function writeInput(){
        push(ref(db, 'quiz/'+topic),
            document.getElementById('input').value
        )
    }
}

function getAllInputs(){
    onValue(ref(db,'quiz'), (snapshot) => {
        var data = snapshot.val()
        console.log(data)
    })
}

if (document.title=="Register"){
    document.getElementById("regis").addEventListener("click",register)
    function register(){
        set(ref(db, 'users/'+document.getElementById('username').value),{
            username: document.getElementById('username').value,
            fetus_nickname: document.getElementById('fetus').value,
            duedate: document.getElementById('due').value,
            email: document.getElementById('email').value,
            password: document.getElementById('pw').value
    })
    }
}

if (document.title=='Login'){
    document.getElementById('login').addEventListener('click',validate)
    function validate(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        onValue(ref(db,'users/'+username), (snapshot) => {
            var data = snapshot.val()
            if (data!=null&&data.password==password){
                alert('Good!')
            }
            else{
                alert('Username/Password entered is invalid')
            }
        })
    }
}
