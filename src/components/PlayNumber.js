import React from 'react';
class PlayNumber extends React.PureComponent {
  handleClick = () => {
    console.log('PF', this.props.id);
    console.log(this.props)
    if (this.props.isDisabled) {
      return;
    }
    this.props.onClick(this.props.id);
  };

  activeStyle = () => {
    let style = styles.playNumber;

    if (this.props.isDisabled) {
      style.opacity = 0.3;
    }
    return style;
  };

  render() {
    return (
      <div style={styles(this.props.isDisabled)} onClick={this.handleClick}>
        {this.props.number}
      </div>
    );
  }
}

const styles = (isDisabled) => ({
  border: 'thin solid #c8f7c8',
  width: '40%',
  display: 'inline-block',
  margin: '2.5%',
  backgroundColor: '#b8ceb8',
  textAlign: 'center',
  padding: '0.25rem',
  opacity: isDisabled ? 0.3 : 1
});

export default PlayNumber;
