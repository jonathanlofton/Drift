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
    const loop = 'http://res.cloudinary.com/jlofton/image/upload/v1501044017/whiteloopbutton_copy_gf45ob.svg';
    const loopengaged = 'http://res.cloudinary.com/jlofton/image/upload/v1501043789/loopbutton_v0ebug.svg';
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
    const muted = "http://res.cloudinary.com/jlofton/image/upload/v1501043792/whitemutebutton_pulpcm.svg";
    const unmuted = "http://res.cloudinary.com/jlofton/image/upload/v1501043789/greenmutebutton_ymfriv.svg";
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
    const playButton = 'http://res.cloudinary.com/jlofton/image/upload/v1501043789/newplaybutton_tpj24x.svg';
    const pauseButton = 'http://res.cloudinary.com/jlofton/image/upload/v1501043789/newpausebutton_jgudqq.svg';
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
    const shuffle = 'http://res.cloudinary.com/jlofton/image/upload/v1501045538/whiteshuffle_cyvwth.svg';
    const shuffleEngaged = 'http://res.cloudinary.com/jlofton/image/upload/v1501045538/greenshuffle_h32ckw.svg';
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
    }
  }

  render() {
    if (this.props.song) {
      console.log(this.props)
      const song = this.props.song;
      return (
        <div className="howler">
          <div className="player-info">
            <img src={song.album.image_url} />
            <div className="player-artist-info">
              <h2 className="artist-song">{song.title}</h2>
              <h2 className="artist-name">{ song.artist.name }</h2>
            </div>

          </div>

          <div className="audio-player-buttons">
            <ReactHowler
              src={song.song_url}
              playing={this.state.playing}
              mute={this.state.muted}
              loop={this.state.loop}
              className="react-hower"
            />
            <div className="shuffle-button">
              {this.shuffleOrNot()}
            </div>
            <div className="previous-song">
              <button onClick={this.handlePrevious}>
                <img src="http://res.cloudinary.com/jlofton/image/upload/v1501044115/leftnext_p6r6bi.svg" />
              </button>
            </div>
            <div className="play-button">
              {this.playOrPause()}
            </div>
            <div className="next-song">
              <button onClick={this.handleSkip}>
                <img src="http://res.cloudinary.com/jlofton/image/upload/v1501043789/skipright_eccgjb.svg" />
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
              <img src="http://res.cloudinary.com/jlofton/image/upload/v1501045538/whiteshuffle_cyvwth.svg"/>
            </div>
            <div className="previous-song">
              <img src="http://res.cloudinary.com/jlofton/image/upload/v1501044115/leftnext_p6r6bi.svg" />
            </div>
            <div className="play-button">
              <img src='http://res.cloudinary.com/jlofton/image/upload/v1501043789/newplaybutton_tpj24x.svg' alt="" />
            </div>
            <div className="next-song">
              <img src="http://res.cloudinary.com/jlofton/image/upload/v1501043789/skipright_eccgjb.svg" />
            </div>
            <div className="loop-button">
              <img src='http://res.cloudinary.com/jlofton/image/upload/v1501044017/whiteloopbutton_copy_gf45ob.svg' alt="" />
            </div>
          </div>
          <div className="mute-button">
            <img src="http://res.cloudinary.com/jlofton/image/upload/v1501043789/greenmutebutton_ymfriv.svg" />
          </div>
          <div className="sound-bar">

          </div>
        </div>
      );
    }
  }
}


export default AudioPlayer;
