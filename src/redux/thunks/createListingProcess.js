import createListing from '../.././api/createListing';

export default function createListingProcess(composedListing, history) {
  return (dispatch, getState) => {
    return createListing(composedListing, history).then(createdListing => {
      if (typeof createdListing === 'string') {
        //
        let errorMsg = createdListing;
        return dispatch({ type: 'UPDATE_ERROR', errorMsg });
        //return localStorage.setItem('errorMsg', userInfo);
      }
      dispatch({
        type: 'CREATE_LISTING',
        hostInfo: createdListing,
        errorMsg: null
      });
      return createdListing;
    });
    // .catch(err => {
    //   console.log('THE_ERR', err);
    // });
  };
}
