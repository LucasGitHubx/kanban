import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5PaGbWimKdYkKLZ8RrAlmV0-nosh80aY",
  authDomain: "kanban-board-efa29.firebaseapp.com",
  projectId: "kanban-board-efa29",
  storageBucket: "kanban-board-efa29.appspot.com",
  messagingSenderId: "1026851064332",
  appId: "1:1026851064332:web:891705e961e38745437c29",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
