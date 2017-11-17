import updateListing from '../.././api/updateListing';

export default function updateListingProcess(hostInfo, history) {
  //We dont use env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    let listingId = hostInfo.id;

    return updateListing(listingId, hostInfo, history).then(updatedListing => {
      //
      if (typeof updatedListing === 'string') {
        let errorMsg = updatedListing;
        return dispatch({ type: 'UPDATE_ERROR', errorMsg });
        //return localStorage.setItem('errorMsg', userInfo);
      }
      dispatch({
        type: 'UPDATE_LISTING',
        hostInfo: updatedListing
      });
      return updatedListing;
    });
    // .catch(err => {
    //   console.log('what is going on', err);
    //   dispatch({
    //     type: 'UPDATE_LISTING',
    //     hostInfo: null,
    //     error: err
    //   });
    // });
  };
}
