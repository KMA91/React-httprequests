import React from 'react';

class GithubForm extends React.Component {

  constructor(props) {
    super(props)
    console.log("GithubForm", props);
  }

  render() {
    return (
      <div class="github--form">
        <input className="textInput" type="text" placeholder="Username" value={this.props.username} onChange={this.props.handleUserNameChange}/>
        <button className="btn caution" title="Use Axios to Get User Info" name="axios" onClick={this.props.onSubmit}>Use Axios</button>
        <button className="btn caution" title="Use Super Fetch to Get User Info" name="superFetch" onClick={this.props.onSubmit}>Use Super Agent</button>
        <button className="btn caution" title="Use Fetch to Get User Info" name="fetch" onClick={this.props.onSubmit}>Use Fetch</button>
        <button className="btn" title="Click Here to Reset your Search and Input" onClick={this.props.handleReset}>Reset</button>
      </div>
    )
  }
}

export default GithubForm;
