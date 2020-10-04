import React from 'react';

class About extends React.Component {
  render () {
    return (
      <div className='wwvce-about'>
        <div className='wwvce-about-inner'>
          <button
            onClick={this.props.onCloseAbout}
            className='wwvce-about-close-button'
          >X</button>
          <p className='wwvce-about-inner-paragraph'>
            Hello and welcome to a game of “Who Wants to Be a Visual Composer expert?”
          </p>
          <p className='wwvce-about-inner-paragraph'>
            Once you start you will be presented with 10 random multiple choice questions with a time limit of 6 minutes for each question. Don’t worry, there will be a handy timer available for you to keep track of.
          </p>
          <p className='wwvce-about-inner-paragraph'>
            Obviously with that amount of time you can cheat and look up the answers on the internet, but what is the fun in that? We recommend taking your time and trying to remember or logically deduce the answer!
          </p>
          <p className='wwvce-about-inner-paragraph'>
            Unfortunately, no lifelines like “Ask the audience” available! Yet…
          </p>
          <p className='wwvce-about-inner-paragraph'>
            Most of all, have fun and enjoy!
          </p>
        </div>
      </div>
    );
  }
}

export default About;
