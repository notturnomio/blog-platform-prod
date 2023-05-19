import React, { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  NORMAL = 'normal',
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  collapsed?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, collapsed, ...otherProps } = props;
  const collapsedState = collapsed === true ? 'collapsedButton' : '';

  return (
    <button
      type='button'
      className={classNames(cls.button, {}, [
        className ?? '',
        theme !== undefined ? cls[theme] : '',
        cls[collapsedState]
      ])}
      {...otherProps}>
      {children}
    </button>
  );
};
