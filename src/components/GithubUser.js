import React from 'react';

function isObjectEmpty(Obj) { // check if user in prop is empty
  for(var key in Obj) {
    if(Obj.hasOwnProperty(key))
      return false;
    }
      return true;
}

class GithubUser extends React.Component {
  constructor(props) {
    super(props)
    console.log("GithubUser", props);
  }

  render() {

    if(this.props.error !== "") { // Check if user is found
      return (
        <div className="github--userwindow">
          <h3 className="center">{this.props.error}</h3>
        </div>
      )
    }

    if(isObjectEmpty(this.props.user)){ // Default message
      return (
        <div className="github--userwindow">
          <h3 className="center">Input a username.</h3>
        </div>
      )
    }

    console.log(this.props.user);

    return ( // return user data
      <div className="github--userwindow center">
        <p>Avatar: <img style={{width: '100px', height: '100%'}} src={ this.props.user.avatar_url }/></p>
        <p>Bio: { this.props.user.bio }</p>
        <p>Blog: { this.props.user.blog }</p>
        <p>Company: { this.props.user.company }</p>
        <p>Created At: { this.props.user.created_at }</p>
        <p>Email: { this.props.user.email }</p>
        <p>Events URL: { this.props.user.events_url }</p>
        <p>Followers: { this.props.user.followers }</p>
        <p>Followers URL { this.props.user.followers_url }</p>
        <p>Following: { this.props.user.following }</p>
        <p>Following URL: { this.props.user.following_url }</p>
        <p>Gists URL: { this.props.user.gists_url }</p>
        <p>Gravatar ID: { this.props.user.gravatar_id }</p>
        <p>Hireable: { this.props.user.hireable }</p>
        <p>HTML URL: { this.props.user.html_url }</p>
        <p>User ID: { this.props.user.id }</p>
        <p>Location: { this.props.user.location }</p>
        <p>Login: { this.props.user.login }</p>
        <p>Username: { this.props.user.name }</p>
        <p>Node ID: { this.props.user.node_id }</p>
        <p>Organization URL: { this.props.user.organizations_url }</p>
        <p>Public Gists: { this.props.user.public_gists }</p>
        <p>Public Repos: { this.props.user.public_repos }</p>
        <p>Received Events URL: { this.props.user.received_events_url }</p>
        <p>Repos URL: { this.props.user.repos_url }</p>
        <p>Site Admin: { this.props.user.site_admin }</p>
        <p>Starred URL: { this.props.user.starred_url }</p>
        <p>Subscriptions URL: { this.props.user.subscriptions_url }</p>
        <p>Type: { this.props.user.type }</p>
        <p>Updated At: { this.props.user.updated_at }</p>
        <p>URL: { this.props.user.url }</p>
      </div>
    )
  }
}

export default GithubUser;
