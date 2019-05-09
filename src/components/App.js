import React, { Component } from 'react';
import axios from 'axios';
import request from 'superagent';
import './App.scss';
import Nav from './Nav';
import Header from './Header';
import Github from './Github';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      githubURL: "https://api.github.com/users/",
      username: "",
      user: {},
      error: ""
    }
  }

  onSubmit = (e) => { // get User Data

    if(this.state.username === ''){
      this.setState({ error: "You must input a username." })
      return;
    }

    switch(e.target.name) {

      case 'axios':
        axios
        .get(this.state.githubURL + this.state.username)
        .then(res =>
          this.setState({user: res.data},
              // () => console.log(this.state.user) // log data after data is set since setState is asynchronous.
          )
        )
        .then(this.setState({ username: "" }))
        .catch(err => this.setState({ error: err.response.data.message },
          // () => console.log(err.response.data.message)
        ))
        break;

      case 'superFetch':
        request
          .get(this.state.githubURL + this.state.username)
          // .then(res => console.log(res.body))
          .then(res => this.setState({ user: res.body },
              () => console.log(this.state)
          ))
          .then(this.setState({ username: "" }))
          .catch(err => this.setState({ error: err.response.body.message },
            // () => console.log(err.response.body.message)
          ))
        break;

      case 'fetch':
        fetch(this.state.githubURL + this.state.username)
            .then( res => {
              if(res.ok) {
                return res.json(); // data is the response converted to JSON
              } else {
                throw res;
              }
            })
            // .then(data => console.log(data))
            .then(data => this.setState({ user: data }, // data is the response converted to JSON
              // () => console.log(this.state)
            ))
            .then(this.setState({ username: "" }))
            .catch(err => this.setState({ error: err.statusText },
              // () => console.log(err.statusText)
            ))
        break;

      default:
        alert("Something went wrong!")
    }
  }

  handleUserNameChange = (e) => { // Add username to state
    this.setState({ username: e.target.value })
  }

  handleReset = () => {
    this.setState({
      username: "",
      user: {},
      error: ""
    },
    // () => console.log(this.state)
    )
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Github handleUserNameChange={this.handleUserNameChange} onSubmit={this.onSubmit} user={this.state.user} error={this.state.error} username={this.state.username} handleReset={this.handleReset}/>
        <Footer />
      </div>
    );
  }
}

export default App;
