import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      playerName: e.target.value
    })
  }

  render() {
    return (
      <div className='wwvce-login'>
        <div className='wwvce-login-inner'>
          <span className="wwvce-login-title">Please enter your name:</span>
          <input
            type="text"
            className="wwvce-login-input"
            onChange={this.handleChange}
          />
        </div>
        <div className='wwvce-login-inner'>
          <button
            onClick={this.props.onOpenAbout}
            className='wwvce-login-open-about'
          >Learn more...</button>
          <button
            onClick={this.props.onStartGame.bind(this, this.state.playerName)}
            className='wwvce-login-start-game'
          >START</button>
        </div>
      </div>
    );
  }
}

export default Login;
