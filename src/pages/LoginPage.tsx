import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useUserStore } from "../store/userStore";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [registerMode, useRegisterMode] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [alreadyLoggedIn, setAlreadyLoggedIn] = useState<boolean>(false);

  const setUser = useUserStore((state) => state.setUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
    }
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const passwordRegex = /^.{5,}$/;
    const emailValidation = emailRegex.test(email);
    const passwordValidation = passwordRegex.test(password);

    if (emailValidation) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }

    if (passwordValidation) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }

    if (!registerMode && emailValidation && passwordValidation) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        setAlreadyLoggedIn(true);
      } catch (error: any) {
        alert(error.code);
      }
    } else if (registerMode && emailValidation && passwordValidation) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await signInWithEmailAndPassword(auth, email, password);
        setAlreadyLoggedIn(true);
      } catch (error: any) {
        alert(error.code);
      }
    }
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label className={emailError ? "error" : undefined}>
          {emailError ? "Invalid email" : "Email"}
        </label>
        <input
          type="email"
          placeholder="example@exg.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={emailError ? "error" : undefined}
        />

        <label className={passwordError ? "error" : undefined}>
          {passwordError ? "Invalid Password" : "Password"}
        </label>
        <input
          type="password"
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className={passwordError ? "error" : undefined}
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

      {alreadyLoggedIn ? <Navigate to="/" replace /> : undefined}
    </div>
  );
}
