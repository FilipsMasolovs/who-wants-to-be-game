import React from 'react';

class Question extends React.Component {
  render () {
    function shuffle (answers) {
      answers.sort(() => Math.random() - 0.5);
    }

    shuffle(this.props.question.answers)

    return (
      <div className='wwvce-game-question'>
        <h2 className='wwvce-game-question-title'>{this.props.question.question}</h2>
        <div className='wwvce-game-question-answers'>
          {this.props.question.answers.map((item, key) => (
            <button
              className='wwvce-game-question-answer-button'
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
