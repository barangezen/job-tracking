import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { Stack } from "@mui/system";
import { IDropdownData } from "../../globals/models";
import styles from "./Dropdown.module.scss";


interface IDropdownProps {
  className?: string;
  title?: string;
  label?: string;
  data: IDropdownData[];
  inputLabel?: boolean;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  className,
  title,
  label,
  data,
  inputLabel,
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
          {data.map((item) => (
            <MenuItem value={item.value}>{item.displayName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
