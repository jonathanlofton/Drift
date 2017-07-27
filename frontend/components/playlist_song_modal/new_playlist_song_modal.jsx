
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import NewPlaylistSongFormContainer from './new_playlist_song_modal_form_container';


const customStyles = {
  // overlay : {
  //   background-color : rgba(0, 0 ,0 , 0.8)
  // },
  content : {
    borderRadius          : '4px',
    height                : "300px",
    width                 : "300px",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '2px solid #ccc'
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
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div>
          <button className="auth-buts" onClick={this.openModal}>Add to Playlist</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Add song to playlist">
            <NewPlaylistSongFormContainer song={this.props.song} />
          </Modal>
        </div>
      </div>
    )
  }
}

export default PlaylistSongModal;
