
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log("WHAT THE HELL")
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup" className="instead-link">sign up instead</Link>;
    } else {
      return <Link to="/login" className="instead-link">log in instead</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleClick(e) {
    e.preventDefault();
    const guestUser = { user: { username: 'guest_user', password: '123456' } };
    this.props.login(guestUser);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Welcome to DRIFT.</h1>
          <br/>
          Please {this.props.formType} or {this.navLink()}
          <div className="errors">{this.renderErrors()}</div>
          <div className="login-form">
            <br />
            <label>
              <input
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input type="submit" value="Submit" className="session-submit-button" />
            <button onClick={this.handleClick} className="guest-login">Guest Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
