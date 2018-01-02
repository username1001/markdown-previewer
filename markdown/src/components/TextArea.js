import React from "react";
const marked = require("marked");

class TextArea extends React.Component {
  state = {
    text: "___ \n ## Header \n ### Smaller Header \n __bold text__ \n\n_italic_"
  };
  render() {
    const handleChange = event => {
      this.setState({
        text: event.target.value
      });
    };
    const Markup = () => {
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
      });
      const Markup = marked(this.state.text, { sanitize: true });
      return {
        __html: Markup
      };
    };
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
              onChange={handleChange}
            />
          </div>
          <div className="col-xs-12 col-sm-6">
            <h3>Preview</h3>
            <div id="preview" dangerouslySetInnerHTML={Markup()} />
          </div>
        </div>
      </div>
    );
  }
}
export default TextArea;
