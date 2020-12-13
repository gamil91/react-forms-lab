import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      message: ""
      
    };
  }

  saveInput = (event) => {
    this.setState({ message: event.target.value})
  }

  render() {
    let char = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.saveInput} type="text" value={this.state.message} name="message" id="message" />
        {char}
      </div>
    );
  }
}

export default TwitterMessage;
