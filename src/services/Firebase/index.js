// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { resolve } from "styled-jsx/css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.ZAPATITOS_API_KEY,
  authDomain: process.env.ATITOS_AUTH_DOMAIN,
  projectId: process.env.PATITOS_PROJECT_ID, 
  storageBucket: process.env.PATITOS_STORAGE_BUCKET,
  messagingSenderId: process.env.PATITOS_MESSAGING_SENDER_ID,
  appId: process.env.PATITOS_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//funcion declarativa
function ejemplo() {
  const numOne = 1;
  const numTwo = 2;
  const sum = numOne + numTwo;
  return sum
}

ejemplo();



function callback(){
  console.log("Hola mundo")
}

//parametro
function saludar(callback){
  //parametro 
  callback();
}

//argumento(lo que se envia)
saludar(callback)


//promesa
const Promise = new Promise(
  (resolve, reject) => {
     //bloque de codigo
     //consumo una APLI
     resolve(null)
     reject()
  }
  
)

function getData (data) {
  console.log(data.json)
}

function onError(data) {
  console.log(data)
}

const getClima = new Promise((resolve, reject) => {
  fetch("https://jsonplaceholder.typicode.com")
  .then(getData)
  .catch(onError)
 }
)

const myPromise = new Promise(
  (resolve, reject) => {
    try {
      alert("Hola")
      resolve("Hola")
    }catch(error) {
      alert("error")
      resolve("error")
    }
  }
)

myPromise
.then()

const myPromise2 = new Promise(
  (resolve, reject) => {
    try{
      resolve("Hola")
    }catch {
      reject("error")
    }
  }
)

myPromise2
.then(
    (Text) => {
      console.log(Text)
      console.log("soy yo")
    }
)

.catch(
  (error) => {
    console.log(error)
  }
)

//funcion declarativa
//funcion de expresion
//IIFE
//bloqueante y no bloqueante
//sincrono y asincrono
//polling o poll
//secuencial y entrelazado
//callbacks (una funcion que es pasada como 
//parametro en otra funcion)
//promesas

//git init para la terminal.
//git status muestra todos los archivos. 
//git add .
//git status
//git restore --staged package.json
//git commit -m "menssage" (git commit -m "initial commit")
//-git remote add origin https://StephaniGalindo:
//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@github.com
///-StephaniGalindo/next-3a.git
//git push origin main o git push origin master