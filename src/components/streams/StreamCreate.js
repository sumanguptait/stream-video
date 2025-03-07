import React from "react";
import { connect } from "react-redux";
import { createStreams } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStreams(formValues);
  };
  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStreams })(StreamCreate);
