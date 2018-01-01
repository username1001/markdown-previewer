import React from "react";

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <form>
          <textarea
            type="text"
            class="markdown-preview"
            value={this.props.text}
          />
        </form>
      </div>
    );
  }
}
export default TextArea;
