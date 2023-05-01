import React from 'react';
import { LoaderSpinner } from 'shared/ui/LoaderSpinner/LoaderSpinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  return (
    <div className={cls.pageLoader}>
      <LoaderSpinner />
    </div>
  );
};
