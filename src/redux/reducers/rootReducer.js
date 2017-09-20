export default function rootReducer(
  currentState = {
    listingItems: [],
    hostInfo: null
  },
  action
) {
  switch (action.type) {
    case 'GET_LISTINGS':
      return { ...currentState, listingItems: action.listingItems };
    case 'CREATE_LISTING':
      return {
        ...currentState,
        hostInfo: action.hostInfo,
        listingItems: [action.hostInfo, ...currentState.listingItems]
      };
    case 'CLOSE_SUCESS_MESSAGE':
      return { ...currentState, hostInfo: action.hostInfo };
    case 'DELETE_LISTING':
      return {
        ...currentState,
        hostInfo: null,
        listingItems: currentState.listingItems.filter(
          listingItem => listingItem.id !== action.hostInfo.id
        )
      };
    case 'GET_ONE_LISTING':
      return {
        ...currentState,
        hostInfo: action.hostInfo
      };
    default:
      return currentState;
  }
}
