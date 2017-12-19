import { combineReducers } from 'redux';

const global = (state = {}, action) => {
  switch (action.type) {
    case 'RESET_GAME':
      return {
        ...state,
        gameId: state.gameId + 1
      };
    default:
      return state;
  }
};

const game = (state = {}, action) => {
  return state;
};

export default combineReducers({ global, game});
