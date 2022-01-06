import React from 'react';

class LetterRow extends React.Component {
  constructor() {
    super();
    this.state = {
      animate: true,
    }
  }
  
  render() {
    return (
      <span>{this.props.text}</span>
    );
  }

  componentDidMount() {
    console.log("LetterRow mounted");
    this.setState({animate: true});
  }
}

export default LetterRow;
