import { connect } from 'react-redux';
import { fetchSongs } from '../../actions/song_actions';
import SongIndex from './song_index';
import { selectAllSongs } from '../../reducers/selectors';
import { receiveCurrentSong } from '../../actions/audio_player_actions';
import { addSongsToPlaylist, makeFirstSongInPlaylist } from '../../actions/playlist_actions';
import { loadArtist } from '../../actions/playlist_actions';

const mapStateToProps = ({ session, songs }) => ({
  currentUser: session.currentUser,
  songs: selectAllSongs(songs),
  songIds: songs.byId.all_songs,
});

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
  addSongsToPlaylist: songs => dispatch(addSongsToPlaylist(songs)),
  makeFirstSongInPlaylist: song => dispatch(makeFirstSongInPlaylist(song)),
  loadArtist: (songIds, songId) => dispatch(loadArtist(songIds, songId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SongIndex);
