import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import './App.css';

function UserData(props) {

  function isObjectEmpty(Obj) { // check if user in state is empty
    for(var key in Obj) {
      if(Obj.hasOwnProperty(key))
        return false;
      }
        return true;
  }

  if(isObjectEmpty(props.userData)){ // Default message
    return (
      <h3>User info will show here.</h3>
    )
  }

  if(props.userData.status == 404) { // Check if user is found
    return (
      <h3>User Not Found.</h3>
    )
  }

  return ( // return user data
    <div>
    <p>Avatar: <img style={{width: '100px', height: '100%'}} src={ props.userData.avatar_url }/></p>
    <p>Bio: { props.userData.bio }</p>
    <p>Blog: { props.userData.blog }</p>
    <p>Company: { props.userData.company }</p>
    <p>Created At: { props.userData.created_at }</p>
    <p>Email: { props.userData.email }</p>
    <p>Events URL: { props.userData.events_url }</p>
    <p>Followers: { props.userData.followers }</p>
    <p>Followers URL { props.userData.followers_url }</p>
    <p>Following: { props.userData.following }</p>
    <p>Following URL: { props.userData.following_url }</p>
    <p>Gists URL: { props.userData.gists_url }</p>
    <p>Gravatar ID: { props.userData.gravatar_id }</p>
    <p>Hireable: { props.userData.hireable }</p>
    <p>HTML URL: { props.userData.html_url }</p>
    <p>User ID: { props.userData.id }</p>
    <p>Location: { props.userData.location }</p>
    <p>Login: { props.userData.login }</p>
    <p>Username: { props.userData.name }</p>
    <p>Node ID: { props.userData.node_id }</p>
    <p>Organization URL: { props.userData.organizations_url }</p>
    <p>Public Gists: { props.userData.public_gists }</p>
    <p>Public Repos: { props.userData.public_repos }</p>
    <p>Received Events URL: { props.userData.received_events_url }</p>
    <p>Repos URL: { props.userData.repos_url }</p>
    <p>Site Admin: { props.userData.site_admin }</p>
    <p>Starred URL: { props.userData.starred_url }</p>
    <p>Subscriptions URL: { props.userData.subscriptions_url }</p>
    <p>Type: { props.userData.type }</p>
    <p>Updated At: { props.userData.updated_at }</p>
    <p>URL: { props.userData.url }</p>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)

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
      .then(res =>
        this.setState({user: res.data},
            // () => console.log(this.state) // log data after data is set since setState is asynchronous.
        )
      )
      .then(this.setState({usernameAxios: ""}))
      .catch(err => this.setState({ user: err.response }))
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
        .catch(err => this.setState({ user: err.response }))
    } else {
      this.handleNoInput();
    }
  }

  getUserFetch() {
    if(this.state.usernameFetch) {
      fetch(this.state.githubURL + this.state.usernameFetch)
          .then( res =>
            {
            if(res.ok) {
              return res.json(); // data is the response converted to JSON
            } else {
              throw res;
            }
          }
        )
          // .then(data => console.log(data))
          .then(data => this.setState({ user: data })) // data is the response converted to JSON
          .then(this.setState({usernameFetch: ""}))
          .catch(err => this.setState({ user: err }))
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
          <UserData userData={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
