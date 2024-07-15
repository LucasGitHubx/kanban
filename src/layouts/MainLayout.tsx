import { Outlet, NavLink } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useEffect } from "react";

export default function MainLayout() {
  const { userr, setUser } = useUserStore((state) => ({
    userr: state.user,
    setUser: state.setUser,
  }));

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
    <>
      <header>
        <h1>Kanban Board</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/kanban/board">My board</NavLink>
            </li>
            <li>
              <NavLink to="/kanban/aboutus">About us</NavLink>
            </li>
            <li>
              {userr == null ? (
                <NavLink to="/kanban/login">Login</NavLink>
              ) : (
                <NavLink to="/kanban/logout">Logout</NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <Outlet></Outlet>
    </>
  );
}
