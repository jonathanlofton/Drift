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
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="greeting-page">
        <div className="initial-greeting-form">
          <h1>DRIFT</h1>
          <nav className="login-signup-greeting">

            <div className="login-signup">
              <Link to="/login">Login</Link>
              <Link to="signup">Sign Up</Link>
            </div>

            <button onClick={this.handleClick}>Guest Login</button>
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
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  </div>
);

const Greeting = ({ currentUser, logout, login, history }) => (
  currentUser ? personalGreeting(currentUser, logout) : <SessionLinks login={login} history={history} />
);


export default Greeting;
