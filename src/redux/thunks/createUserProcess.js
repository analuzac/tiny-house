import createUser from '../.././api/createUser';

export default function createUserProcess(newUser, history) {
  return (dispatch, getState) => {
    //inside userInfo we are passing in the email & password to verify if user exists & has appropriate credentials
    return createUser(newUser, history).then(newUser => {
      //if the password passed in matches the stored hashedPashword, we get back a userInfo object containing the user's id, name, email, and token

      if (typeof newUser === 'string') {
        //
        let errorMsg = newUser;
        return dispatch({ type: 'UPDATE_ERROR', errorMsg });
        //return localStorage.setItem('errorMsg', userInfo);
      }

      dispatch({ type: 'CREATE_USER', newUser: newUser, errorMsg: null });
      return newUser;
    });
  };
}
