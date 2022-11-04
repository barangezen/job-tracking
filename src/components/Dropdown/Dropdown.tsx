import { FormControl, Select, MenuItem } from "@mui/material";
import styles from "./Dropdown.module.scss";

interface IDropdownProps {
  className?: string;
}

export const Dropdown: React.FC<IDropdownProps> = ({ className }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{"Job priorty"}</div>
      <FormControl fullWidth size="small" className={className}>
       
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
