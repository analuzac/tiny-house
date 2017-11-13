import getFilteredListings from '../.././api/getFilteredListings';

export default function getFilteredListingsProcess(filter) {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    return getFilteredListings(filter).then(listingItems => {
      dispatch({ type: 'GET_LISTINGS', listingItems });
      return listingItems;
    });
  };
}
