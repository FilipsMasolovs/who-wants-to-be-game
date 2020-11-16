import React from 'react'
import Timer from './game/timer'
import Questions from './game/questions'
import Question from './game/question'

class Game extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      points: 0,
      currentQuestion: 0,
      questionIndexes: []
    }
    this.child = React.createRef()
    this.handleAnswerClick = this.handleAnswerClick.bind(this)
    while (this.state.questionIndexes.length < 10) {
      let i = Math.floor(Math.random() * 20) + 1
      if (this.state.questionIndexes.indexOf(i) === -1) {
        this.state.questionIndexes.push(i)
      }
    }
  }

  handleAnswerClick (e) {
    this.setState(prevState => ({
      points: prevState.points + Questions.getAnswer(this.state.questionIndexes[this.state.currentQuestion], e),
      currentQuestion: prevState.currentQuestion + 1
    }))
    if (this.state.currentQuestion === 9) {
      this.props.onGameFinish(this.state.points + Questions.getAnswer(this.state.questionIndexes[this.state.currentQuestion], e))
    }
    this.child.current.resetTimer()
  }

  render () {
    return (
      <div className='wwvce-game'>
        <Question onClick={this.handleAnswerClick} question={Questions.getQuestion(this.state.questionIndexes[this.state.currentQuestion])} />
        <Timer ref={this.child} onGameFail={this.props.onGameFail} />
      </div>
    )
  }
}

export default Game
