import getSortedListings from '../.././api/getSortedListings';

export default function getSortedListingsProcess(sort) {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    return getSortedListings(sort).then(listingItems => {
      dispatch({ type: 'GET_LISTINGS', listingItems });
      return listingItems;
    });
  };
}
