import { ButtonHTMLAttributes } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  NORMAL = "normal",
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  collapsed?: Boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, collapsed, ...otherProps } = props;
  const collapsedState = collapsed ? "collapsedButton" : "";

  return (
    <button
      className={classNames(cls.button, {}, [
        className,
        cls[theme],
        cls[collapsedState],
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
