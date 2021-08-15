import React from "react";
import "./form.css";

class Form extends React.Component {
  // input text state
  constructor(props) {
    super(props);
    this.state = {
      value: "Type here what are you looking for",
      checked: "teacher"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.radioChange = this.radioChange.bind(this);
  }

  // input text handlers

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    event.preventDefault();
  }

  radioChange(event) {
    this.setState({ checked: event.target.value });
  }

  render() {
    var formRadioClass;
    var formRadioClass1;
    if (this.state.checked === "teacher") {
      formRadioClass = "homeFormRadio checked";
      formRadioClass1 = "homeFormRadio";
    } else {
      formRadioClass1 = "homeFormRadio checked";
      formRadioClass = "homeFormRadio";
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className="homeFormInput"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <br />
        <div className={formRadioClass}>
          <label className="control control-radio">
            I'm a teacher
            <input
              type="radio"
              onChange={this.radioChange}
              value="teacher"
              checked={this.state.checked === "teacher"}
            />
            <div className="control_indicator"></div>
          </label>
        </div>
        <div className={formRadioClass1}>
          <label className="control control-radio">
            i'm a student
            <input
              type="radio"
              value="student"
              checked={this.state.checked === "student"}
              onChange={this.radioChange}
            />
            <div className="control_indicator"></div>
          </label>
        </div>

        <input type="submit" className="btn" value="Search" />
      </form>
    );
  }
}

export default Form;
