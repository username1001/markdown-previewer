import React from "react";

class TextArea extends React.Component {
  state = {
    text: "## Enter markdown"
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center">ReactJS Markdown Editor</h1>
          <div className="col-xs-12 col-sm-6">
            <h3>Markdown</h3>
            <textarea
              id="markdown"
              className="markdown"
              defaultValue={this.state.text}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h3>Preview</h3>
            <div id="preview" />
          </div>
        </div>
      </div>
    );
  }
}
export default TextArea;
