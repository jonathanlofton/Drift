
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
  }

  componentWillReceiveProps(nextProps) {
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

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Welcome to DRIFT.</h1>
          <br/>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div className="login-form">
            <br />
            <label>
              <input
                type="text"
                value="Username"
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                value="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br />
            <input type="submit" value="Submit" className="session-submit-button" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
