import React from 'react';

import LogInPageLayout from './LogInPageLayout';

export default function LogInPage({ userInfo, onLogIn }) {
  return (
    <div className="LogInPage">
      <LogInPageLayout userInfo={userInfo} onLogIn={onLogIn} />
    </div>
  );
}
