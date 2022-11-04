import { Container } from "@mui/material";
import { CustomTextField } from "../components/Header/TextField/TextField";
import styles from "./MainContent.module.scss";

export const MainContent: React.FC = () => {
  return (
    <Container className={styles.container}>
      <span className={styles.title}>Create New Job</span>
      <div>
        <CustomTextField
          title={"Job Name"}
          size="small"
          className={styles.jobNameCreate}
        />
      </div>
    </Container>
  );
};
