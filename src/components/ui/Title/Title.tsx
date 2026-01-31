import { HTMLAttributes, ElementType } from "react";
import styles from "./Title.module.css";

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  color?: "dark" | "medium" | "light";
  align?: "left" | "center" | "right";
}

export default function Title({ 
  children, 
  level = 2, 
  color = "dark", 
  align = "left",
  className,
  ...props 
}: TitleProps) {
  const Tag = `h${level}` as ElementType;
  
  const rootClassName = [
    styles.title,
    styles[`h${level}`],
    styles[color],
    styles[align],
    className
  ].join(" ").trim();

  return (
    <Tag className={rootClassName} {...props}>
      {children}
    </Tag>
  );
}