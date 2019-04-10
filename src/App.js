import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      githubURL: "https://api.github.com/users/",
      usernameAxios: "",
      usernameSuperAgent: "",
      usernameFetch: "",
      user: {},
      showUser: false
    }

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.resetUser = this.resetUser.bind(this);
    this.getUserAxios = this.getUserAxios.bind(this);
    this.getUserSuperAgent = this.getUserSuperAgent.bind(this);
    this.getUserFetch = this.getUserFetch.bind(this);
  }

  handleUserNameChange(e) { // Add username to state
    var name = e.target.name,
        username = e.target.value;
    switch(name) {
      case "axios":
          this.setState({usernameAxios: username})
          break;
      case "superAgent":
          this.setState({usernameSuperAgent: username})
          break;
      case "fetch":
          this.setState({usernameFetch: username})
          break;
      default:
          alert("We got an unexpected change")
          break;
    }
    // console.log("axios: " + this.state.usernameAxios);
    // console.log("superAgent: " + this.state.usernameSuperAgent);
    // console.log("fetch: " + this.state.usernameFetch);
  }

  handleNoInput() {
    alert("You must input a username!");
  }

  getUserAxios() {
    if(this.state.usernameAxios) {
      axios
      .get(this.state.githubURL + this.state.usernameAxios)
      // .then(response => console.log(response.data))
      .then(res =>
        this.setState({user: res.data},
            // () => console.log(this.state)) // log data after data is set since setState is asynchronous.
      ))
      .then(this.setState({usernameAxios: ""}))
    } else {
      this.handleNoInput();
    }
  }

  getUserSuperAgent() {
    if(this.state.usernameSuperAgent) {
      request
        .get(this.state.githubURL + this.state.usernameSuperAgent)
        // .then(res => console.log(res.body))
        .then(res => this.setState({ user: res.body },
            // () => console.log(this.state)
        ))
        .then(this.setState({usernameSuperAgent: ""}))
    } else {
      this.handleNoInput();
    }
  }

  getUserFetch() {
    if(this.state.usernameFetch) {
      fetch(this.state.githubURL + this.state.usernameFetch)
          .then(res => res.json()) // Change data type so we are able to parse the data
          // .then(data => console.log(data))
          .then(data => this.setState({ user: data }, // data is the response converted to JSON
               // () => console.log(this.state)
          ))
          .then(this.setState({usernameFetch: ""}))
    } else {
      this.handleNoInput();
    }
  }

  resetUser() { // reset user data
    this.setState({user: {}})
  }

  render() {
    return (
      <div className="App">
        <h1>Get GitHub User Details</h1>
        <div className="axiosReq">
            <input type="text" value={this.state.usernameAxios} name="axios" onChange={this.handleUserNameChange}/>
            <button onClick={this.getUserAxios}>Get User Data with Axios</button>
        </div>
        <div className="superAgentReq">
            <input type="text" value={this.state.usernameSuperAgent} name="superAgent" onChange={this.handleUserNameChange}/>
            <button onClick={this.getUserSuperAgent}>Get User Data with Super Agent</button>
        </div>
        <div className="fetchReq">
            <input type="text" value={this.state.usernameFetch} name="fetch" onChange={this.handleUserNameChange}/>
            <button onClick={this.getUserFetch}>Get User Data with Fetch</button>
        </div>
        <div className="resetData">
          <button onClick={this.resetUser}>Reset</button>
        </div>
        <div className="userData">
          <p>{ this.state.user.avatar_url }</p>
          <p>{ this.state.user.bio }</p>
          <p>{ this.state.user.blog }</p>
          <p>{ this.state.user.company }</p>
          <p>{ this.state.user.created_at }</p>
          <p>{ this.state.user.email }</p>
          <p>{ this.state.user.events_url }</p>
          <p>{ this.state.user.followers }</p>
          <p>{ this.state.user.followers_url }</p>
          <p>{ this.state.user.following }</p>
          <p>{ this.state.user.following_url }</p>
          <p>{ this.state.user.gists_url }</p>
          <p>{ this.state.user.gravatar_id }</p>
          <p>{ this.state.user.hireable }</p>
          <p>{ this.state.user.html_url }</p>
          <p>{ this.state.user.id }</p>
          <p>{ this.state.user.location }</p>
          <p>{ this.state.user.login }</p>
          <p>{ this.state.user.name }</p>
          <p>{ this.state.user.node_id }</p>
          <p>{ this.state.user.organizations_url }</p>
          <p>{ this.state.user.public_gists }</p>
          <p>{ this.state.user.public_repos }</p>
          <p>{ this.state.user.received_events_url }</p>
          <p>{ this.state.user.repos_url }</p>
          <p>{ this.state.user.site_admin }</p>
          <p>{ this.state.user.starred_url }</p>
          <p>{ this.state.user.subscriptions_url }</p>
          <p>{ this.state.user.type }</p>
          <p>{ this.state.user.updated_at }</p>
          <p>{ this.state.user.url }</p>
        </div>
      </div>
    );
  }
}

export default App;
