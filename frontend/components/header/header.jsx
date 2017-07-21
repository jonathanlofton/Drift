import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.navLink()
  }

  navLink() {
    if ( this.props.currentUser ) {
      return <button onClick={this.handleClick}>Log Out</button>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  handleClick() {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  render() {
    return (

      <div className="header-render">
        <div className="app-title-icon-combo">
          <img src="http://res.cloudinary.com/jlofton/image/upload/v1500496705/message-in-a-bottle-white_hc6fkx.svg" className="icon"/>
          <Link to="/"><h1 className="App-title">DRIFT</h1></Link>
        </div>
        <div className="header-nav-bar">
          <div className="loginout">{ this.navLink() }</div>
        </div>
      </div>

    );
  }
}



export default(Header);