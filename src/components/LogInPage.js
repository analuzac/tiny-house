import React from 'react';

import SuccessfulLogInComponent from './SuccessfulLogInComponent';
import LogInComponent from './LogInComponent';

import LogInPageLayout from './LogInPageLayout';

export default function LogInPage({
  userInfo,
  onLogIn,
  onLogOut,
  history,
  errorMsg
}) {
  return (
    <div className="LogInPage">
      <LogInPageLayout>
        {userInfo
          ? <SuccessfulLogInComponent userInfo={userInfo} onLogOut={onLogOut} />
          : <LogInComponent
              userInfo={userInfo}
              onLogIn={onLogIn}
              history={history}
              errorMsg={errorMsg}
            />}
      </LogInPageLayout>
    </div>
  );
}
