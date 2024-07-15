import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <header>
        <h1>Kanban Board</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="">My board</NavLink>
            </li>
            <li>
              <NavLink to="">About us</NavLink>
            </li>
            <li>
              <NavLink to="">Login</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet></Outlet>
    </>
  );
}
