import rootReducer from './rootReducer';

import deepFreeze from 'deep-freeze';

import data from '../../mock-data';

describe('rootReducer', () => {
  it('action.type GET_LISTINGS', () => {
    const action = {
      type: 'GET_LISTINGS',
      listingItems: { ...data.notes[0] }
    };

    const currentState = {
      listingItems: [data.notes[1]],
      hostInfo: null
    };

    deepFreeze(currentState);

    const nextState = {
      listingItems: [action.note, data.notes[1]],
      hostInfo: action.note.id,
      isGettingListings: false
    };

    expect(rootReducer(currentState, action)).toEqual(nextState);
  });
});
