import React from 'react';
import AuthChecker from '../../../features/auth/AuthChecker';
import Header from '../../backoffice/components/Header';
import NewsForm from '../components/NewsForm';

const ComponentCreateNews = () => {
  return (
    <AuthChecker>
      <Header />
      <NewsForm />
    </AuthChecker>
  );
};

export default ComponentCreateNews;
