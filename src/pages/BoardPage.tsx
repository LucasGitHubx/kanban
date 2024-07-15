import { auth } from "../firebase/firebase";
import { useUserStore } from "../store/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function BoardPage() {
  const { userr, setUser } = useUserStore((state) => ({
    userr: state.user,
    setUser: state.setUser,
  }));

  const userEmail = userr?.email;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div className="board">
      {userr == null ? <Navigate to="/kanban/login" /> : undefined}

      <h2>{userEmail}'s board</h2>
    </div>
  );
}
