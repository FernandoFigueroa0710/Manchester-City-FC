import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../Utils/FormFields";
import { validate } from "../../Utils/misc";

class Enroll extends Component {
  state = {
    formError: false,
    formSucess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter Your Email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };
  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];
    newFormdata[element.id] = newElement;
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }
  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }
    if (formIsValid) {
      console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true
      });
    }
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={event => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>
            <div className="enroll_input">
              <FormField
                id={"email"}
                formdata={this.state.formdata.email}
                change={element => this.updateForm(element)}
              />
              {this.state.formError ? (
                <div className="error_label">Something is wrong, try again</div>
              ) : null}
              <button onClick={event => this.submitForm(event)}>Enroll</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
