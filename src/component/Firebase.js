
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBXA3GIq4A92btVGngKE0U1Ymu0XkQhp8g",
  authDomain: "ytpro-96362.firebaseapp.com",
  projectId: "ytpro-96362",
  storageBucket: "ytpro-96362.appspot.com",
  messagingSenderId: "1069697305731",
  appId: "1:1069697305731:web:2c725c249211e917ee9fb6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


const provider = new GoogleAuthProvider()


  export  const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result)=> {

            const name = result.user.displayName
            const email = result.user.email

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);

            console.log(name);
            console.log(email);


        }).catch((error)=>{
            console.log(error);
        })

}