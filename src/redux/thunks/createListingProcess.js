import createListing from '../.././api/createListing';

export default function createListingProcess(composedListing) {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    return createListing(composedListing).then(createdListing => {
      dispatch({
        type: 'CREATE_LISTING',
        hostInfo: createdListing
      });
      return createdListing;
    });
  };
}
