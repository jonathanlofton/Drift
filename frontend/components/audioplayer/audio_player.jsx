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
    this.playOrPause = this.playOrPause.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.muteOrUnmute = this.muteOrUnmute.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.loopOrNot = this.loopOrNot.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  handleLoop() {
    if (this.state.loop) {
      this.setState({ loop: false });
    } else {
      this.setState({ loop: true });
    }
  }

  componentDidMount() {
    this.props.fetchSongs();
  }

  loopOrNot() {
    const loop = 'http://res.cloudinary.com/jlofton/image/upload/v1500840424/loopbutton_zcvsws.svg';
    if (this.state.loop) {
      return <button onClick={this.handleLoop}><img src={loop} alt="" /></button>;
    }
    return <button onClick={this.handleLoop}><img src={loop} alt="" /></button>;
  }

  handleMute() {
    if (this.state.muted) {
      this.setState({ muted: false });
    } else {
      this.setState({ muted: true });
    }
  }

  muteOrUnmute() {
    if (this.state.muted) {
      return <button onClick={this.handleMute}>Unmute</button>;
    }
    return <button onClick={this.handleMute}>Mute</button>;
  }

  handlePlay() {
    if (this.state.playing) {
      this.setState({ playing: false });
    } else {
      this.setState({ playing: true });
    }
  }

  playOrPause() {
    const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg';
    const pauseButton = 'http://res.cloudinary.com/jlofton/image/upload/v1500839806/pauseWhite_sffk70.svg';
    if (this.state.playing) {
      return <button onClick={this.handlePlay}><img src={pauseButton} alt="" /></button>;
    }
    return <button onClick={this.handlePlay}><img src={playButton} alt="" /></button>;
  }

  handleSkip() {
    this.props.skipSong();
  }

  handlePrevious() {
    this.props.previousSong();
  }

  render() {
    if (this.props.song) {
      const song = this.props.song;
      console.log(this.props)
      return (
        <div className="howler">
          <div className="song-info">
            <h2>{song.title}</h2>
          </div>
          <div className="audio-player-buttons">
            <ReactHowler
              src={song.song_url}
              playing={this.state.playing}
              mute={this.state.muted}
              loop={this.state.loop}
              className="react-hower"
            />
            <div className="previous-song">
              <button onClick={this.handlePrevious}>
                <img src="http://res.cloudinary.com/jlofton/image/upload/v1501020883/leftnext_sozaai.svg" />
              </button>
            </div>
            <div className="play-button">
              {this.playOrPause()}
            </div>
            <div className="next-song">
              <button onClick={this.handleSkip}>
                <img src="http://res.cloudinary.com/jlofton/image/upload/v1501020883/skipright_smz5so.svg" />
              </button>
            </div>
            <div className="loop-button">
              {this.loopOrNot()}
            </div>
          </div>
          <div className="mute-button">
            {this.muteOrUnmute()}
          </div>
        </div>
      );
    } else {
      console.log(this.props)
      return (
        <div className="howler">
          <div className="song-info">
          </div>
          <div className="audio-player-buttons">
            <div className="previous-song">
              <img src="http://res.cloudinary.com/jlofton/image/upload/v1501020883/leftnext_sozaai.svg" />
            </div>
            <div className="play-button">
              <img src='http://res.cloudinary.com/jlofton/image/upload/v1500777291/playerwhite_w2wcy1.svg' alt="" />
            </div>
            <div className="next-song">
              <img src="http://res.cloudinary.com/jlofton/image/upload/v1501020883/skipright_smz5so.svg" />
            </div>
            <div className="loop-button">
              <img src='http://res.cloudinary.com/jlofton/image/upload/v1500840424/loopbutton_zcvsws.svg' alt="" />
            </div>
          </div>
          <div className="mute-button">
            <h1>Mute</h1>
          </div>
        </div>
      );
    }
  }
}


export default AudioPlayer;
