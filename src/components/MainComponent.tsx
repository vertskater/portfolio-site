import styles from "./css/main.module.css";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

export default function MainComponent() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <About />
      </main>
      <Footer />
    </>
  );
}
