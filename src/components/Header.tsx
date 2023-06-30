import styles from "./css/header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const bgImgUrl = process.env.PUBLIC_URL + "/img/profile-pic.jpg";
  const bgImg = {
    backgroundImage: `url(${bgImgUrl})`,
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right",
    backgroundAttachment: "fixed",
  };
  return (
    <header style={bgImg} className={styles.header}>
      <div>
        <p>Hello, My Name is ...</p>
        <h1>Christoph Mitterwallner</h1>
        <span className={styles.subheader}>Webdeveloper</span>
      </div>
      <div className={styles.btn_icon}>
        <button>
          <NavLink to="/projects">See my Projects</NavLink>
        </button>
        <a href="https://github.com/vertskater" target="_blank">
          <i className="devicon-github-original colored"></i>
        </a>
      </div>
    </header>
  );
}
