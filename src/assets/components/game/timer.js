import React from 'react';

class Timer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      minutes: 6,
      seconds: 0
    };
  }

  componentDidMount () {
    this.myInterval = setInterval(() => {
      if (this.state.seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (this.state.seconds === 0) {
        if (this.state.minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  resetTimer () {
    this.setState({
      minutes: 6,
      seconds: 0
    })
  }

  render () {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      this.props.onGameFail()
    }

    return (
      <div className='wwvce-game-timer'>
        {this.state.minutes}:{this.state.seconds < 10 ? `0${this.state.seconds}` : this.state.seconds}
      </div>
    );
  }
}

export default Timer;
