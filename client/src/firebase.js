// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPsvvRoNKlKJ_GYRagJlxeqIXbDkGKUrI",
  authDomain: "housinghub-ce5cb.firebaseapp.com",
  databaseURL: "https://housinghub-ce5cb-default-rtdb.firebaseio.com",
  projectId: "housinghub-ce5cb",
  storageBucket: "housinghub-ce5cb.appspot.com",
  messagingSenderId: "996631000655",
  appId: "1:996631000655:web:617936321df8f3e48c9c3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { app, messaging };

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BMg-XV9rwP3n2pXdHEq1YpALiWYq0_ESTHoxClpjmKCGcxTMkxk14EtPFXh2npNTxkV5lxc72UE1VhOFTO1qj7g",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
  });
