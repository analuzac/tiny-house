import deleteListing from '../.././api/deleteListing';

export default function deleteListingProcess(hostInfo) {
  //We dont use env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    let listingId = getState().hostInfo.id;

    getState().listingItems.forEach(listingItem => {
      if (listingId === listingItem.id) {
        return deleteListing(listingId).then(wasDeleted => {
          dispatch({
            type: 'DELETE_LISTING',
            hostInfo: null
          });
          return wasDeleted;
        });
      }
    });
  };
}
