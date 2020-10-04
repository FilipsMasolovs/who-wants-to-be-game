import React from 'react';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      playerName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }

  handleChange (e) {
    this.setState({
      playerName: e.target.value
    })
  }

  handleEnterPress (e) {
    if (e.key === 'Enter') {
      this.props.onStartGame(this.state.playerName)
    }
  }

  render () {
    return (
      <div className='wwvce-login'>
        <div className='wwvce-login-inner'>
          <span className='wwvce-login-title'>Please enter your name:</span>
          <input
            type='text'
            className='wwvce-login-input'
            onChange={this.handleChange}
            onKeyPress={this.handleEnterPress}
          />
        </div>
        <div className='wwvce-login-inner wwvce-login-inner-controls'>
          <button
            onClick={this.props.onStartGame.bind(this, this.state.playerName)}
            className='wwvce-login-start-game'
          >START</button>
          <button
            onClick={this.props.onOpenAbout}
            className='wwvce-login-open-about'
          >Learn more...</button>
        </div>
      </div>
    );
  }
}

export default Login;
