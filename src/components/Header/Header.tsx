
import styles from './Header.module.scss';

export const AppHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{"Job Tracking"}</div>
    </div>
  );
};
