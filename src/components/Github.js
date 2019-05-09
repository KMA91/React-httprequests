import React from 'react';
import GithubForm from './GithubForm';
import GithubUser from './GithubUser';

class Github extends React.Component {
  constructor(props) {
    super(props)
    console.log("Github", props);
  }

  render() {
    return (
      <section className="github">
          <GithubForm handleUserNameChange={this.props.handleUserNameChange} onSubmit={this.props.onSubmit} username={this.props.username} handleReset={this.props.handleReset}/>
          <GithubUser user={this.props.user} error={this.props.error}/>
      </section>
    )
    // return (
    //   <section className="github">
    //       <GithubForm handleUserNameChange={this.props.handleUserNameChange} onSubmit={this.props.onSubmit} username={this.props.username} handleReset={this.props.handleReset}/>
    //       <GithubUser user={this.props.user} error={this.props.error}/>
    //   </section>
    // )

  }
}

export default Github;
