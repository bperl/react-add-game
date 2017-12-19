export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'RESET_GAME':
      return {
        ...state,
        gameId: state.gameId + 1
      }
    default:
      return state;
  }
};
