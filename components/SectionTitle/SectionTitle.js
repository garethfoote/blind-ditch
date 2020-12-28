import styles from "./SectionTitle.module.css";
import Container from "../../components/container";

export const SectionTitle = ({ children }) => (
  <Container spacing="xl">
    <div className="text-center">
      <h2 className={styles.title}>{children}</h2>
    </div>
  </Container>
);
