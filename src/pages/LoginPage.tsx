import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function LoginPage() {
  const [registerMode, useRegisterMode] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return (
    <div className="login">
      <form>
        <label>Email</label>
        <input
          type="email"
          placeholder="example@exg.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button>{registerMode ? "Register" : "Log In"}</button>
      </form>

      <div className="info">
        {!registerMode ? (
          <>
            <p>Don't you have an account?</p>
            <button onClick={() => useRegisterMode(!registerMode)}>
              Register
            </button>
          </>
        ) : (
          <>
            <p>Do you already have an account?</p>
            <button onClick={() => useRegisterMode(!registerMode)}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
}
