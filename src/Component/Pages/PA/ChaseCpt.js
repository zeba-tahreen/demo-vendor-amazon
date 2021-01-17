import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Chase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      // value tracks input, let's have new variable to track output
      output: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        output: this.state.value,
      },
      () => {
        console.log(this.state.output);
      }
    );
    console.log(this.state.output); // Can I print data in the output?
    // I want the Output on submit and not onChange event
    // Deepak: Use this.state.output as output
  };

  // Deepak: Below two things is expected, that's used to track input , output can be tracked onsubmit using new variable

  // problm {1}  onchange is giving results before submit button is clicked
  // problm {2}  also string in the input is updating itself with the results same as the output

  handleChange = (e) => {
    e.preventDefault();
    const newValue = e.target.value;
    const splitValue = newValue.split(" ");
    const arryValue = Array.from(new Set(splitValue))
      .toString()
      .replaceAll(",", " ");
    this.setState({
      value: arryValue,
    });
  };
  render() {
    return (
      <Jumbotron>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              Enter
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </div>
          <div>
            <label>
              Output :<p>{this.state.output}</p>
              {/* I want the Output on submit and not onChange event */}
            </label>
          </div>
        </form>
      </Jumbotron>
    );
  }
}

export default Chase;
