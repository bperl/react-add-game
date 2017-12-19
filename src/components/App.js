// To start, run 'yarn webpack' and 'yarn start'

import React from 'react';
import { connect } from 'react-redux'

import Game from './Game';
import { resetGame } from '../store/actions';

import store from '../store/store';

// console.log(store);

// class App extends React.PureComponent {
  // state = {
  //   gameId: 1
  // };
  //
  // resetGame = () => {
  //   this.setState((prevState) => {
  //     return { gameId: prevState.gameId + 1 };
  //   });
  // };

//   render() {
//     return <Game reset={this.props.resetGame} key={this.props.gameId} />;
//   }
// }
const App = (props) => <Game reset={props.resetGame} key={props.gameId} />;

const mapStateToProps = (state) => ({
  gameId: state.global.gameId
});

// This mapDispatchToProps is not needed because we're referencing the action directly  as the second argument to connect.
// const mapDispatchToProps = () => ({
//   resetGame: () => {
//     dispatch(resetGame());
//   }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)

// The line below is a shortcut for mapDispatchToProps. i.e. it does not require the addtional 'mapDispatchToProps' function defined above on lines 34-38.
export default connect(mapStateToProps, { resetGame })(App);
