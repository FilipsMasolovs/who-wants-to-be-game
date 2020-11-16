import React from 'react'
import Spotlight from './assets/components/spotlight'
import Copyright from './assets/components/copyright'
import About from './assets/components/about'
import Login from './assets/components/login'
import Game from './assets/components/game'
import Fail from './assets/components/game/fail'
import Finished from './assets/components/game/finished'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAboutVisible: false,
      isGameStarted: false,
      isGameFailed: false,
      isGameFinished: false,
      playerName: '',
      placeholder: '',
      points: 0
    }
    this.openAbout = this.openAbout.bind(this)
    this.startGame = this.startGame.bind(this)
    this.handleGameFail = this.handleGameFail.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.handleGameFinish = this.handleGameFinish.bind(this)
  }

  openAbout (e) {
    if (e.target !== e.currentTarget) {
     return
    }
    this.setState(prevState => ({
      isAboutVisible: !prevState.isAboutVisible
    }))
  }

  startGame (playerName) {
    if (!playerName) {
      this.setState({
        placeholder: 'Please enter your name!'
      })
      return
    }
    this.setState({
      isGameStarted: true,
      playerName: playerName
    })
  }

  handleGameFail () {
    this.setState({
      isGameStarted: false,
      isGameFailed: true,
      playerName: '',
      points: 0
    })
  }

  restartGame (e) {
    if (e.target !== e.currentTarget) {
      return
    }

    this.setState({
      isGameStarted: false,
      isGameFailed: false,
      isGameFinished: false,
      playerName: '',
      points: 0
    })
  }

  handleGameFinish (e) {
    this.setState({
      isGameStarted: false,
      isGameFinished: true,
      points: e,
      placeholder: ''
    })
  }

  render () {
    return (
      <div className='wwvce-container'>
        {!this.state.isGameStarted && <Spotlight />}
        {!this.state.isGameStarted && <Login onOpenAbout={this.openAbout} onStartGame={this.startGame} placeholder={this.state.placeholder} />}
        {this.state.isGameStarted && <Game onGameFail={this.handleGameFail} onGameFinish={this.handleGameFinish} />}
        {this.state.isAboutVisible && <About onCloseAbout={this.openAbout} />}
        {this.state.isGameFailed && <Fail onRestartGame={this.restartGame} />}
        {this.state.isGameFinished && <Finished playerName={this.state.playerName} points={this.state.points} onRestartGame={this.restartGame} />}
        <Copyright />
      </div>
    )
  }
}

export default App