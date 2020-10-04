import React from 'react';
import Spotlight from './assets/components/spotlight'
import Copyright from './assets/components/copyright'
import About from './assets/components/about'
import Login from './assets/components/login'
import Game from './assets/components/game'
import Fail from './assets/components/game/fail'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isAboutVisible: false,
      isGameStarted: false,
      isGameFailed: false,
      playerName: '',
      points: 0
    };
    this.openAbout = this.openAbout.bind(this);
    this.startGame = this.startGame.bind(this);
    this.handleGameFail = this.handleGameFail.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  openAbout () {
    this.setState({
      isAboutVisible: !this.state.isAboutVisible
    })
  }

  startGame (playerName) {
    if (!playerName) {
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

  restartGame () {
    this.setState({
      isGameStarted: false,
      isGameFailed: false,
      playerName: '',
      points: 0
    })
  }

  render () {
    return (
      <div className='wwvce-container'>
        {!this.state.isGameStarted && <Spotlight />}
        {!this.state.isGameStarted && <Login onOpenAbout={this.openAbout} onStartGame={this.startGame} />}
        {this.state.isGameStarted && <Game onGameFail={this.handleGameFail} />}
        {this.state.isAboutVisible && <About onCloseAbout={this.openAbout} />}
        {this.state.isGameFailed && <Fail onRestartGame={this.restartGame} />}
        <Copyright />
      </div>
    );
  }
}

export default App;