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
  value?: string;
  onChange?: any;
  autoFocus?: boolean;
  margin?: "none" | "dense" | "normal";
  readonly?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const CustomTextField: React.FC<ITextFieldProps> = ({
  className,
  title,
  label,
  placeholder,
  variant,
  size,
  inputIcon,
  value,
  onChange,
  autoFocus,
  margin,
  readonly,
  disabled,
  fullWidth,
}) => {
  return (
    <Stack className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      <TextField
        className={className}
        id="outlined-basic"
        label={label}
        autoFocus={autoFocus}
        placeholder={placeholder}
        variant={variant}
        size={size}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{inputIcon}</InputAdornment>
          ),
          readOnly: readonly,
        }}
        value={value}
        onChange={onChange}
        margin={margin}
        fullWidth={fullWidth}
        disabled={disabled}
      />
    </Stack>
  );
};
