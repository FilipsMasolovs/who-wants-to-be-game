import React from 'react';
import Timer from './game/timer'
import Questions from './game/questions'
import Question from './game/question'

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      points: 0,
      currentQuestion: 0,
      questionIndexes: []
    };
    this.child = Timer
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    while(this.state.questionIndexes.length < 10){
      let i = Math.floor(Math.random() * 20) + 1;
      if(this.state.questionIndexes.indexOf(i) === -1) this.state.questionIndexes.push(i);
    }
  }

  handleAnswerClick (e) {
    Questions()[this.state.questionIndexes[this.state.currentQuestion]].answers.forEach((answer) => {
      if (answer.answer === e) {
        this.setState({
          points: this.state.points + answer.value,
          currentQuestion: this.state.currentQuestion + 1
        })
      }
      console.log(this.state.points)
    })
    this.refs.child.resetTimer()
    if (this.state.currentQuestion === 9) {
      this.props.onGameFinish(this.state.points)
      return
    }
  }

  render () {
    return (
      <div className='wwvce-game'>
        <Question onClick={this.handleAnswerClick} question={Questions()[this.state.questionIndexes[this.state.currentQuestion]]} />
        <Timer ref='child' onGameFail={this.props.onGameFail} />
      </div>
    );
  }
}

export default Game;
