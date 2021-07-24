import React from 'react';
import AuthChecker from '../../../features/auth/AuthChecker';
import Dasboard from '../components/Dasboard';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const BackofficePage = () => {
  return (
    <AuthChecker>
      <div>
        <div>
          <Header />
        </div>
        <Sidebar />
        <Dasboard />
      </div>
    </AuthChecker>
  );
};

export default BackofficePage;
