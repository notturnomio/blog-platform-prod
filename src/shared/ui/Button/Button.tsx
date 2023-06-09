import React, { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  NORMAL = 'normal',
  INVERTED = 'inverted',
  OUTLINE = 'outline'
}

export enum ButtonSize {
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  collapsed?: boolean;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, theme, square = false, size = ButtonSize.M, collapsed = false, ...otherProps } = props;
  // const collapsedState = collapsed === true ? 'collapsedButton' : '';

  const mods: Record<string, boolean> = {
    ...(theme && { [cls[theme]]: true }),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    [cls.square]: square,
    [cls[size]]: true,
    [cls.collapsedButton]: collapsed
  };

  return (
    <button type='button' className={classNames(cls.button, mods, [className ?? ''])} {...otherProps}>
      {children}
    </button>
  );
};
