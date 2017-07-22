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
    const { song } = this.props;
    return (
      <li className="song-item">
        <div>
          <Link to={`/songs/${song.id}`}>
            <p>{song.id}</p>
            <p>{song.title}</p>
          </Link>
          <button onClick={this.handleClick}>Play</button>
        </div>
      </li>
    );
  }
}

export default SongIndexItem;
