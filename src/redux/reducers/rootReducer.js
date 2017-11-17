export default function rootReducer(
  currentState = {
    listingItems: [],
    hostInfo: null,
    userInfo: null,
    newUser: null,
    errorMsg: null
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
        listingItems: [action.hostInfo, ...currentState.listingItems],
        errorMsg: action.errorMsg
      };
    case 'CLOSE_SUCESS_MESSAGE':
      return { ...currentState, hostInfo: action.hostInfo };
    case 'DELETE_LISTING':
      return {
        ...currentState,
        listingItems: currentState.listingItems.filter(
          listingItem => listingItem.id !== action.hostInfo.id
        ),
        hostInfo: null,
        errorMsg: action.errorMsg
      };
    case 'UPDATE_LISTING':
      return {
        ...currentState,
        hostInfo: action.hostInfo,
        listingItems: currentState.listingItems.map(
          listingItem =>
            listingItem.id === action.hostInfo.id
              ? action.hostInfo
              : listingItem
        ),
        errorMsg: action.errorMsg
      };
    case 'GET_ONE_LISTING':
      return {
        ...currentState,
        hostInfo: action.hostInfo,
        errorMsg: action.errorMsg
      };
    case 'CLOSE_ONE_LISTING':
      return {
        ...currentState,
        hostInfo: action.hostInfo
      };
    case 'CREATE_USER':
      return {
        ...currentState,
        newUser: action.newUser
      };
    case 'GET_TOKEN':
      return {
        ...currentState,
        userInfo: action.userInfo,
        errorMsg: action.errorMsg
      };
    case 'REMOVE_TOKEN':
      return {
        ...currentState,
        userInfo: action.userInfo
      };
    case 'UPDATE_ERROR':
      return {
        ...currentState,
        errorMsg: action.errorMsg
      };

    default:
      return currentState;
  }
}
