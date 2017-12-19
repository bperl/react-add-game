import React from 'react';
import shuffle from 'lodash.shuffle';

import PlayNumber from './PlayNumber';

class Game extends React.PureComponent {
  // Without Stage 2 enabled, you need a constructor
  // constructor() {
  //   super();
  //   this.target = 10 + Math.floor(50* Math.random());
  // }

  // With stage 2 enabled, you can declare it without a constructor:
  // target = 10 + Math.floor(50 * Math.random());

  // Fake random numbers to test
  // playNumbers = [1, 2, 3, 4, 5];

  // after 10 seconds, game is over
  state = {
    selectedIds: [],
    remainingSeconds: 10
  };

  gameStatus = 'PLAYING';

  selectId = (id) => {
    this.setState((prevState) => {
      // return { selectedIds: prevState.selectedIds.concat(id) };
      return { selectedIds: [...prevState.selectedIds, id] };
    });
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.remainingSeconds === 0) {
          clearInterval(this.intervalId);
          return null;
        }
        return { remainingSeconds: prevState.remainingSeconds - 1 };
      });
    }, 1000);
  }

  // Adds an extra calculation after render. Also, this is a side-effect i.e. not a pure function.
  componentWillUpdate(nextProps, nextState) {
    // do we need new game STATUS?
    if (
      nextState.selectedIds !== this.state.selectedIds ||
      nextState.remainingSeconds === 0
    ) {
      this.gameStatus = this.calcGameStatus(nextState);
    }

    if (this.gameStatus !== 'PLAYING') {
      clearInterval(this.intervalId);
    }
  }

  // Don't use state for computed values.
  calcGameStatus = (nextState) => {
    let selectedTotal = nextState.selectedIds.reduce((acc, curr) => {
      return acc + this.playNumbers[curr];
    }, 0);
    console.log('total is: ', selectedTotal);
    if (nextState.remainingSeconds === 0 || selectedTotal > this.target) {
      return 'LOST';
    }
    if (selectedTotal < this.target) {
      return 'PLAYING';
    } else if (selectedTotal === this.target) {
      return 'WON';
    } else {
      return 'don\'t know';
    }
  };

  playNumbers = Array.from({ length: 6 }).map(
    () => 2 + Math.floor(12 * Math.random())
  );

  target = this.playNumbers.slice(0, 4).reduce((acc, curr) => acc + curr);

  playNumbers = shuffle(this.playNumbers);

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const gameStatus = this.gameStatus;
    return (
      <div>
        <div style={styles.target}>{this.target}</div>
        <div>
          <div>
            {this.playNumbers.map((playNumber, index) => (
              <PlayNumber
                number={playNumber}
                id={index}
                key={index}
                onClick={this.selectId}
                isDisabled={
                  gameStatus !== 'PLAYING' ||
                  this.state.selectedIds.indexOf(index) >= 0
                }
              />
            ))}
          </div>
        </div>
        {gameStatus}
        <br />
        {this.state.remainingSeconds}
        <br />
        {this.gameStatus !== 'PLAYING' && <button onClick={this.props.reset}>Reset</button>}
      </div>
    );
  }
}

const styles = {
  target: {
    backgroundColor: '#888',
    margin: '10%',
    padding: '0.5rem',
    textAlign: 'center'
  }
};

export default Game;
