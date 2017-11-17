import deleteListing from '../.././api/deleteListing';

export default function deleteListingProcess(hostInfo, history) {
  //We dont use env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    let listingId = hostInfo.id;

    getState().listingItems.forEach(listingItem => {
      if (listingId === listingItem.id) {
        return deleteListing(listingId, history).then(wasDeleted => {
          //
          if (typeof wasDeleted === 'string') {
            let errorMsg = wasDeleted;
            return dispatch({ type: 'UPDATE_ERROR', errorMsg });
            //return localStorage.setItem('errorMsg', userInfo);
          }
          dispatch({
            type: 'DELETE_LISTING',
            hostInfo: hostInfo,
            errorMsg: null
          });
          return wasDeleted;
        });
        // .catch(err => {
        //   console.log('what is going on', err);
        //   dispatch({
        //     type: 'GET_ONE_LISTING',
        //     hostInfo: null,
        //     error: err
        //   });
        // });
      }
    });
  };
}
