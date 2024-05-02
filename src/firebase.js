import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQ8V0CdABfTAwjI7jpgE_N0_ZSjoxmO48",
  authDomain: "regfood-user-data.firebaseapp.com",
  projectId: "regfood-user-data",
  storageBucket: "regfood-user-data.appspot.com",
  messagingSenderId: "629744980590",
  appId: "1:629744980590:web:d8dc411ae94b7f918a4c7f"
};

export const app = initializeApp(firebaseConfig);