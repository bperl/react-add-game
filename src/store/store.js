import { createStore } from 'redux';
import mainReducer from './reducers';

const store = createStore(mainReducer, {
  gameId: 1
});

// const store = createStore(mainReducer, {
//   global: {
//     gameId: 1
//   },
//   game: {
//     selectIds: [],
//     remainingSeconds: 10,
//   }
// });

export default store;
