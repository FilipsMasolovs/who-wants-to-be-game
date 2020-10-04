import React from 'react';

class Question extends React.Component {
  render() {

    return (
      <div className='wwvce-game-question'>
        <h2 className='wwvce-game-question-title'>{this.props.question.question}</h2>
        <div className='wwvce-game-question-answers'>
          {this.props.question.answers.map((item, key) => (
            <button
              className='wwvce-game-question-answer'
              value={item.answer}
              key={key}
              onClick={this.props.onClick.bind(this, item.answer)}
            >{item.answer}</button>
          ))}
        </div>
      </div>
    );
  }
}

export default Question;
