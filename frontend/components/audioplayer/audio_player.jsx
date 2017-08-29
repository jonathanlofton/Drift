import React from 'react';
import ReactHowler from 'react-howler';

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: true,
      muted: false,
      loop: false,
      shuffle: false,
    };


    this.handlePlay = this.handlePlay.bind(this);
    this.playOrPause = this.playOrPause.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.muteOrUnmute = this.muteOrUnmute.bind(this);
    this.handleLoop = this.handleLoop.bind(this);
    this.loopOrNot = this.loopOrNot.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
    this.shuffleOrNot = this.shuffleOrNot.bind(this);

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
    this.props.fetchArtist(this.props.song.artist_id);
    this.props.fetchAlbum(this.props.song.album_id);
  }

  loopOrNot() {
    const loop = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/whiteloopbutton+copy.svg';
    const loopengaged = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/loopbuttongreen.svg';
    if (this.state.loop) {
      return <button onClick={this.handleLoop}><img src={loopengaged} alt="" /></button>;
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
    const muted = "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/green-mutebutton.svg";
    const unmuted = "https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/white-mutebutton.svg";
    if (this.state.muted) {
      return <button onClick={this.handleMute}><img src={muted}/></button>;
    }
    return <button onClick={this.handleMute}><img src={unmuted}/></button>;
  }

  handlePlay() {
    if (this.state.playing) {
      this.setState({ playing: false });
    } else {
      this.setState({ playing: true });
    }
  }

  playOrPause() {
    const playButton = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/newplaybutton.svg';
    const pauseButton = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/newpausebutton.svg';
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

  shuffleOrNot() {
    const shuffle = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/whiteshuffle.svg';
    const shuffleEngaged = 'https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/greenshuffle.svg';
    if (this.state.shuffle) {
      return <button onClick={this.handleShuffle}><img src={shuffleEngaged} alt="" /></button>;
    }
    return <button onClick={this.handleShuffle}><img src={shuffle} alt="" /></button>;
  }

  handleShuffle() {
    if (this.state.shuffle) {
      this.setState({ shuffle: false });
    } else {
      this.setState({ shuffle: true });
      this.props.shufflePlaylist();
    }
  }

  render() {
    if (this.props.song) {
      const song = this.props.song;
      return (
        <div className="howler">
          <div className="player-info">
            <img src={song.album.image_url} />
            <div className="player-artist-info">
              <h2 className="artist-song">{ song.title }</h2>
              <h2 className="artist-name">{ song.artist.name }</h2>
            </div>

          </div>

          <div className="audio-player-buttons">
            <ReactHowler
              src={song.song_url}
              playing={this.state.playing}
              mute={this.state.muted}
              loop={this.state.loop}
              onEnd={this.handleSkip}
              className="react-hower"
            />
            <div className="shuffle-button">
              {this.shuffleOrNot()}
            </div>
            <div className="previous-song">
              <button onClick={this.handlePrevious}>
                <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/skipleft.svg" />
              </button>
            </div>
            <div className="play-button">
              {this.playOrPause()}
            </div>
            <div className="next-song">
              <button onClick={this.handleSkip}>
                <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/skipright.svg" />
              </button>
            </div>
            <div className="loop-button">
              {this.loopOrNot()}
            </div>
          </div>
          <div className="mute-button">
            {this.muteOrUnmute()}
          </div>

          <div className="sound-bar">

          </div>
        </div>
      );
    } else {
      return (
        <div className="howler">
          <div className="song-info">
          </div>
          <div className="audio-player-buttons">
            <div></div>
            <div className="shuffle-button">
              <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/whiteshuffle.svg"/>
            </div>
            <div className="previous-song">
              <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/skipleft.svg" />
            </div>
            <div className="play-button">
              <img src='https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/newplaybutton.svg' alt="" />
            </div>
            <div className="next-song">
              <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/skipright.svg" />
            </div>
            <div className="loop-button">
              <img src='https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/whiteloopbutton+copy.svg' alt="" />
            </div>
          </div>
          <div className="mute-button">
            <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/white-mutebutton.svg" />
          </div>
          <div className="sound-bar">

          </div>
        </div>
      );
    }
  }
}


export default AudioPlayer;
