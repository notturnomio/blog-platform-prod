import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
  const { t } = useTranslation('about');

  return <h2>{t('About Us')}</h2>;
};

export default AboutPage;
