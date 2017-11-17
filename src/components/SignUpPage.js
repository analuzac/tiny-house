import React from 'react';

import SignUpPageLayout from './SignUpPageLayout';

export default function SignUpPage({ onSignUp, newUser, history, errorMsg }) {
  return (
    <div className="LogInPage">
      <SignUpPageLayout
        newUser={newUser}
        onSignUp={onSignUp}
        history={history}
        errorMsg={errorMsg}
      />
    </div>
  );
}
