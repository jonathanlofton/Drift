import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.currentUser = this.currentUser.bind(this);
  }

  componentWillMount() {
    this.navLink()
  }

  navLink() {
    if ( this.props.currentUser ) {
      const { username } = this.props.currentUser

      return (
        <div className="loginout">
          <h1>{username}</h1>
          <button onClick={this.handleClick}>Log Out</button>
        </div>
      );
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  currentUser() {
    if (this.props.currentUser) {
      return <h1>{currentUser.username}</h1>
    }
    return <h1>Guest login</h1>
  }

  handleClick() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    return (

      <div className="header-render">
        <div className="app-title-icon-combo">
          <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/message-in-a-bottle-white.svg" className="icon"/>
          <Link to="/music/artists"><h1 className="App-title">DRIFT</h1></Link>
        </div>
        <div className="header-nav-bar">
          <div className="header-current-user">
          </div>
          { this.navLink() }
        </div>
      </div>

    );
  }
}



export default(Header);
