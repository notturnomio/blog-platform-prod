import React from 'react';
import cls from './LoaderSpinner.module.scss';

interface LoaderSpinnerProps {
  className?: string;
}

export const LoaderSpinner: React.FC<LoaderSpinnerProps> = (props) => {
  return (
    <div className={cls.loaderSpinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
