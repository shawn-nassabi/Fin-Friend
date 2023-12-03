import styles from "./styles.module.css";

export default function BudgetPageLayout({ children }) {
  return <section className={styles}>{children}</section>;
}
