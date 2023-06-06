import styles from "./css/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className="text-muted">
          &copy; 2023 | Christoph Mitterwallner
        </span>
      </div>
    </footer>
  );
}
