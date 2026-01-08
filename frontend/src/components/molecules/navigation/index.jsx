import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

function Navigation({ title = "Starfall Ledger" }) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.titleLink}>
        {title}
      </Link>
    </nav>
  );
}

export default Navigation;
