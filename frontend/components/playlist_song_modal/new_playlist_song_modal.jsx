
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import NewPlaylistSongFormContainer from './new_playlist_song_modal_form_container';


const customStyles = {
  overlay : {
    backgroundColor: 'rgba(0, 0 ,0 , 0)'
  },
  content : {
    borderRadius          : '0px',
    height                : "300px",
    width                 : "200px",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : 'rgba(40, 40, 40, 1)',
    border           : ' 1px solid rgba(40, 40, 40, 1)',
  }
};

class PlaylistSongModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <div>
          <button className="add-song-to-playlist-modal" onClick={this.openModal}>
            <img src="https://s3-us-west-2.amazonaws.com/spotifyclone-dev/audioplayer/buttons/whiteaddsongbutton.svg" />
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Choose Playlist">
            <NewPlaylistSongFormContainer song={this.props.song} closeModal={this.closeModal}/>
          </Modal>
        </div>
      </div>
    )
  }
}

export default PlaylistSongModal;
