export const resetGame = () => ({
  type: 'RESET_GAME',
});

export const selectId = (id) => {
  // this.setState((prevState) => {
  //   // return { selectedIds: prevState.selectedIds.concat(id) };
  //   return { selectedIds: [...prevState.selectedIds, id] };
  // });
  return {
    type: 'SELECT_ID',
    id,
  };
};
