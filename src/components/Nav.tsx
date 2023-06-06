import { NavLink, Outlet } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              <i className="fas fa-home">About</i>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">
              <i className="fas fa-project-diagram">Projects</i>
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
