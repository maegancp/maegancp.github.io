import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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

function writeInput(){
    set(ref(db, 'test/01'), {
        test: 'abc'
    })
}

