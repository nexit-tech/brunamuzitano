"use client";

import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
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
    <motion.button 
      className={rootClassName} 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}