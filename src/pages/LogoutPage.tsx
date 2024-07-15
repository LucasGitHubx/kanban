import { Navigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

export default function LogoutPage() {
  const [alreadyLoggedOut, setAlreadyLoggedOut] = useState<boolean>(false);

  async function handleClick() {
    try {
      await signOut(auth);
      setAlreadyLoggedOut(true);
    } catch (e: any) {
      alert(e.code);
    }
  }

  return (
    <div className="logout-page">
      <h2>Click the button to log out</h2>
      <button onClick={handleClick}>Log Out</button>

      {alreadyLoggedOut ? <Navigate to="/kanban/" /> : undefined}
    </div>
  );
}
