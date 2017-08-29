import { connect } from 'react-redux';
import AudioPlayer from './audio_player';
import { fetchSongs } from '../../actions/song_actions';
import { playSong } from '../../actions/audio_player_actions';
import { skipSong, previousSong, shufflePlaylist, unshufflePlaylist } from '../../actions/playlist_actions';
import { fetchArtist } from '../../actions/artist_actions';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = ({ songs, playlist, albums, artists }) => ({
  songs: playlist.songIds.map(songId => songs.byId[songId]),
  song: (playlist.currentSong !== null) ? songs.byId[playlist.songIds[playlist.currentSong]] : null,
  albums,
  artists,
});

const mapDispatchToProps = dispatch => ({
  playsong: song => dispatch(playSong(song)),
  shufflePlaylist: () => dispatch(shufflePlaylist()),
  unshufflePlaylist: () => dispatch(unshufflePlaylist()),
  fetchSongs: () => dispatch(fetchSongs()),
  fetchAlbum: () => dispatch(fetchAlbum()),
  fetchArtist: () => dispatch(fetchArtist()),
  skipSong: () => dispatch(skipSong()),
  previousSong: () => dispatch(previousSong()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AudioPlayer);
