import React from 'react';
import Timer from './game/timer'
import Questions from './game/questions'
import Question from './game/question'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0
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

  render() {
    let questionIndexes = [];
    while(questionIndexes.length < 10){
      let i = Math.floor(Math.random() * 20) + 1;
      if(questionIndexes.indexOf(i) === -1) questionIndexes.push(i);
    }

    return (
      <div className='wwvce-game'>
        <Question question={Questions()[this.state.currentQuestion]} />
        <Timer onGameFail={this.props.onGameFail} />
      </div>
    );
  }
}

export default Game;
