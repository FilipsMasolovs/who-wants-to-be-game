import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className='wwvce-game-question'>
        <h2 className="wwvce-game-question-title">{this.props.question.question}</h2>
        {this.props.question.answers.map((item, key) => (
          <button value={item.value} key={key}>{item.answer}</button>
        ))}
      </div>
    );
  }
}

export default Question;
