import { useState } from "react";

export default function LoginPage() {
  const [registerMode, useRegisterMode] = useState<boolean>(false);

  return (
    <div className="login">
      <form>
        <label>Email</label>
        <input type="email" placeholder="example@exg.com" />

        <label>Password</label>
        <input type="password" placeholder="*********" />

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
