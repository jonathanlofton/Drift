import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const guestUser = { user: { username: 'guest_user', password: '123456' } };
    this.props.login(guestUser);
    this.props.history.push('/music');
  }

  render() {
    return (
      <div className="greeting-page">
        <div className="initial-greeting-form">
          <h1>DRIFT</h1>
          <nav className="login-signup-greeting">
            <Link to="/login">Login</Link>
            <Link to="signup">Sign Up</Link>
            <button onClick={this.handleClick} className="guest-login-x">Guest Login</button>
          </nav>
        </div>
      </div>
    )
  }
}




const personalGreeting = (currentUser, logout) => (
  <div className="personal-greeting-page">
    <hgroup className="header-group">

        <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <div className="button-sizing">
        <button className="logout-button" onClick={logout}>Log Out</button>
        <Link to="/music" className="music-button">Music</Link>
      </div>
    </hgroup>
  </div>
);

const Greeting = ({ currentUser, logout, login, history }) => (
  currentUser ? personalGreeting(currentUser, logout) : <SessionLinks login={login} history={history} />
);


export default Greeting;
