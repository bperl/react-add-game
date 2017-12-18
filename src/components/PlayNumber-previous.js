import React from 'react';

class PlayNumber extends React.PureComponent {
  handleClick = () => {
    console.log('PF', this.props.id);
  };

  // activeStyle = () => {
  //   let style = styles.playNumber;
  //
  //   if (this.props.isDisabled) {
  //     style.opacity = 0.3;
  //   }
  //   return style;
  // };

  render() {
    return (
      <div style={styles.playNumber} onClick={this.handleClick}>
        {this.props.number}
      </div>
    );
  }
}

const styles = {
  playNumber: {
    border: 'thin solid #c8f7c8',
    width: '40%',
    display: 'inline-block',
    margin: '2.5%',
    backgroundColor: '#b8ceb8',
    textAlign: 'center',
    padding: '0.25rem'
  },
};

export default PlayNumber;
