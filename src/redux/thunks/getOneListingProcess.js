import getOneListing from '../.././api/getOneListing';

export default function getOneListingProcess(hostInfo) {
  //We dont use env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    let listingId = hostInfo.id;

    return getOneListing(listingId).then(listing => {
      dispatch({
        type: 'GET_ONE_LISTING',
        hostInfo: listing
      });
      return listing;
    });
  };
}
