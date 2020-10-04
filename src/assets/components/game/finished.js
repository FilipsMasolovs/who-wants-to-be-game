import React from 'react';
import logo from '../../images/VC_horizontal.png'

class Finished extends React.Component {
  render () {
    return (
      <div className='wwvce-finished'>
        <div className='wwvce-finished-inner'>
          <button
            onClick={this.props.onRestartGame}
            className='wwvce-finished-close-button'
          >X</button>
          <img
            src={logo}
            alt='Who Wants to Be a Visual Composer expert?'
            className='wwvce-finished-logo'
          />
          <h2 className="wwvce-finished-title">Congratulations {this.props.playerName}!</h2>
            <p className="wwvce-finished-description">You have successfully answered to {this.props.points} out of 10 questions.</p>
          {this.props.points === 0 && <p className="wwvce-finished-description">You know nothing about Visual Composer! Please don't refer to yourself as an expert.</p>}
          {this.props.points > 0 && this.props.points < 5 && <p className="wwvce-finished-description">You know something about Visual Composer! Please still don't refer to yourself as an expert.</p>}
          {this.props.points >= 5 && this.props.points < 10 && <p className="wwvce-finished-description">You know a lot about Visual Composer! You can refer to yourself as an expert.</p>}
          {this.props.points === 10 && <p className="wwvce-finished-description">You know everything about Visual Composer! You can proudly call yourself a Visual Composer expert!</p>}
        </div>
      </div>
    );
  }
}

export default Finished;
