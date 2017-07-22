import React from 'react';
import { Link } from 'react-router-dom';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.receiveCurrentSong(this.props.song);
  }

  render() {
    console.log(this.props);
    const { song } = this.props;
    return (
      <li>
        <Link to={`/songs/${song.id}`}>
          <span>{song.id}</span>
          <span>{song.title}</span>
        </Link>
        <button onClick={this.handleClick}>Play</button>
      </li>
    );
  }
}

export default SongIndexItem;
