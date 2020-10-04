import React from 'react';
import Timer from './game/timer'
import Questions from './game/questions'
import Question from './game/question'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      currentQuestion: 0,
      questionIndexes: []
    };
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    while(this.state.questionIndexes.length < 10){
      let i = Math.floor(Math.random() * 20) + 1;
      if(this.state.questionIndexes.indexOf(i) === -1) this.state.questionIndexes.push(i);
    }
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

  handleAnswerClick (e) {
    Questions()[this.state.currentQuestion].answers.forEach((answer) => {
      if (answer.answer === e) {
        this.setState({
          points: this.state.points + answer.value,
          currentQuestion: this.state.currentQuestion + 1,
        })
      }
    })
  }

  render() {
    return (
      <div className='wwvce-game'>
        <Question onClick={this.handleAnswerClick} question={Questions()[this.state.questionIndexes[this.state.currentQuestion]]} />
        <Timer onGameFail={this.props.onGameFail} />
      </div>
    );
  }
}

export default Game;
