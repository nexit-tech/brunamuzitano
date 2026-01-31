import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = "primary", 
  fullWidth = false,
  className,
  ...props 
}: ButtonProps) {
  const rootClassName = [
    styles.button,
    styles[variant],
    fullWidth ? styles.fullWidth : "",
    className
  ].join(" ").trim();

  return (
    <button className={rootClassName} {...props}>
      {children}
    </button>
  );
}