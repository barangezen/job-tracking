import React from "react";
import styles from "./TextField.module.scss";
import { InputAdornment, TextField } from "@mui/material";
import { Stack } from "@mui/system";

interface ITextFieldProps {
  className?: string;
  title?: string;
  label?: string;
  placeholder?: string;
  variant: "outlined" | "filled" | "standard";
  size: "small" | "medium";
  inputIcon?: React.ReactNode;
}

export const CustomTextField: React.FC<ITextFieldProps> = ({
  className,
  title,
  label,
  placeholder,
  variant,
  size,
  inputIcon,
}) => {
  return (
    <Stack className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <TextField
        className={className}
        id="outlined-basic"
        label={label}
        placeholder={placeholder}
        variant={variant}
        size={size}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{inputIcon}</InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
