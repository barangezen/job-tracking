import { Container } from "@mui/material";
import styles from "./Header.module.scss";

export const AppHeader: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.title}>{"Job Tracking"}</div>
    </Container>
  );
};
