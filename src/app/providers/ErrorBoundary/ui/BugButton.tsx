import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// this component is for testing ErrorBoundary only
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrowError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={onThrowError}>{t('Throw Error')}</Button>;
};
