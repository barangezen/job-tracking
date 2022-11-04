import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import styles from "./Dropdown.module.scss";

interface IDropdownProps {
  className?: string;
  title?: string;
  label?: string;
  inputLabel?: boolean;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  className,
  title,
  inputLabel,
  label,
}) => {
  return (
    <Stack className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <FormControl fullWidth size="small" className={className}>
        {inputLabel && (
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        )}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={label}
        >
          <MenuItem value={0}>Priorty (All)</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
