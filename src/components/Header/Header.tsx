import { Container } from "@mui/material";
import { texts } from "../../globals/contstants";
import styles from "./Header.module.scss";

export const AppHeader: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.title}>{texts.headerTitle}</div>
    </Container>
  );
};
