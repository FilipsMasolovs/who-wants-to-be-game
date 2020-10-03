import React from 'react';
import Spotlight from './assets/components/spotlight'
import Copyright from './assets/components/copyright'
import About from './assets/components/about'
import Login from './assets/components/login'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAboutVisible: false,
      isGameStarted: false,
      playerName: ''
    };
    this.openAbout = this.openAbout.bind(this);
    this.startGame = this.startGame.bind(this);
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

  render() {
    return (
      <div className='wwvce-container'>
        {!this.state.isGameStarted && <Spotlight />}
        {!this.state.isGameStarted && <Login onOpenAbout={this.openAbout} onStartGame={this.startGame}/>}
        {this.state.isAboutVisible && <About onCloseAbout={this.openAbout}/>}
        <Copyright />
      </div>
    );
  }
}

export default App;