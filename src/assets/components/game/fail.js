import React from 'react'

class Fail extends React.Component {
  render () {
    return (
      <div className='wwvce-fail'>
        <div className='wwvce-fail-inner'>
          <button
            onClick={this.props.onRestartGame}
            className='wwvce-fail-close-button'
          >X</button>
          <p className='wwvce-fail-inner-paragraph'>
            Unfortunately you ran out of time!
          </p>
          <p className='wwvce-fail-inner-paragraph'>
            How could that happened? You had all the time in the world.
          </p>
          <p className='wwvce-fail-inner-paragraph'>
            Want to try again?
          </p>
        </div>
      </div>
    );
  }
}

export default Fail
