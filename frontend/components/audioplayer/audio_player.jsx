import React from 'react';
import ReactHowler from 'react-howler';


class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      muted: false,
      loop: false,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.handleUnmute = this.handleUnmute.bind(this);
    this.muteOrUnmute = this.muteOrUnmute.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.handleUnloop = this.handleUnloop.bind(this);
    this.loopOrNot = this.loopOrNot.bind(this);
  }

  handleLoop() {
    this.setState({
      loop: true,
    });
  }

  handleUnloop() {
    this.setState({
      loop: false,
    });
  }

  loopOrNot() {
    if (this.state.loop) {
      return <button onClick={this.handleUnloop}>Unloop</button>
    } else {
      return <button onClick={this.handleLoop}>Loop</button>
    }
  }

  handleMute() {
    this.setState({
      muted: true,
    })
  }

  handleUnmute() {
    this.setState({
      muted: false,
    })
  }

  muteOrUnmute() {
    if (this.state.muted) {
      return <button onClick={this.handleUnmute}>Unmute</button>
    } else {
      return <button onClick={this.handleMute}>Mute</button>
    }
  }

  handlePlay() {
    this.setState({
      playing: true,
    });
  }

  handlePause() {
    this.setState({
      playing: false,
    });
  }

  playOrPause() {
    const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500775074/219712-200_c386us.png';
    const pauseButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500775414/pausetrack_mmx7yk.png';
    if (this.state.playing) {
      return <button onClick={this.handlePause}><img src={pauseButton} alt="" /></button>;
    }
    return <button onClick={this.handlePlay}><img src={playButton} alt="" /></button>;
  }

  render() {
    if (this.props.songsArray.playlist.length > 0) {
      const song = this.props.songsArray.playlist[0];
      console.log(this.props)
      return (
        <div className="howler">
          <ReactHowler
            src={song.song_url}
            playing={this.state.playing}
            mute={this.state.muted}
            loop={this.state.loop}
          />
          {this.playOrPause()}
          {this.loopOrNot()}
          <div className="mute-button">
            {this.muteOrUnmute()}
          </div>
          <div className="song-info">
            <h2>{song.title}</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }
  }
}


export default AudioPlayer;
