import { NavLink, Outlet } from "react-router-dom";
import styles from "./css/nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={styles.nav}>
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
