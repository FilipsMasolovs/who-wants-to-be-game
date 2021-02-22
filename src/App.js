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
      gameState: 'initial',
      playerName: '',
      placeholder: '',
      points: 0
    }
    this.openAbout = this.openAbout.bind(this)
    this.closeAbout = this.closeAbout.bind(this)
    this.startGame = this.startGame.bind(this)
    this.handleGameFail = this.handleGameFail.bind(this)
    this.restartGame = this.restartGame.bind(this)
    this.handleGameFinish = this.handleGameFinish.bind(this)
  }

  openAbout (e) {
    this.setState(prevState => ({
      gameState: 'aboutOpened',
    }))
  }

  closeAbout (e) {
    if (e.target !== e.currentTarget) {
      return
    }
    this.setState(prevState => ({
      gameState: 'initial',
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
      gameState: 'gameStarted',
      playerName: playerName
    })
  }

  handleGameFail () {
    this.setState({
      gameState: 'gameFailed',
      playerName: '',
      points: 0
    })
  }

  restartGame (e) {
    if (e.target !== e.currentTarget) {
      return
    }

    this.setState({
      gameState: 'initial',
      playerName: '',
      points: 0
    })
  }

  handleGameFinish (e) {
    this.setState({
      gameState: 'gameFinished',
      points: e,
      placeholder: ''
    })
  }

  getGameContent () {
    switch(this.state.gameState) {
      case 'initial':
        return (
            <>
              <Spotlight />
              <Login onOpenAbout={this.openAbout} onStartGame={this.startGame} placeholder={this.state.placeholder} />
            </>
        )
        break;
      case 'aboutOpened':
        return <About onCloseAbout={this.closeAbout} />
        break;
      case 'gameStarted':
        return <Game onGameFail={this.handleGameFail} onGameFinish={this.handleGameFinish} />
        break;
      case 'gameFailed':
        return <Fail onRestartGame={this.restartGame} />
        break;
      case 'gameFinished':
        return <Finished playerName={this.state.playerName} points={this.state.points} onRestartGame={this.restartGame} />
        break;
    }
  }

  render () {
    return (
      <div className='wwvce-container'>
        {this.getGameContent()}
        <Copyright />
      </div>
    )
  }
}

export default App