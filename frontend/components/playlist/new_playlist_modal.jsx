import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    zIndex: 50,
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(10, 10, 10, 0.6)'
  },
  content : {
    borderRadius          : '0px',
    height                : "30%",
    width                 : "100%",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background: 'rgb(45, 45, 45)',
    border: '0px',
    color : 'white'
  }
};

class NewPlaylistModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      name: '',
      // creator_id: this.props.session.currentUser.id,
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value,
    });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleSubmit(e) {
    e.preventDefault();
    const playlist = { name: this.state.name };
    this.props.createPlaylist(playlist).then(this.closeModal);
  }

  render() {
    let formType;
    console.log(this.props);
    return (
      <div className="new-playlist-button">
        <button className="open-modal-button" onClick={this.openModal}>New playlist</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Session Modal"
          parentSelector={() => document.body}
        >
          <div className="modal-box">

            <form onSubmit={this.handleSubmit} className="modal-form">
              <label className="create-playlist-form-label">
                <h2>Playlist Name</h2>
                <input
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="create-playlist-input"
                  placeholder="Start typing..."
                />
              </label>
              <input type="submit" className="submit-playlist" placeholder="playlist name" />
            </form>
          </div>
        </Modal>
      </div>);
  }
}

export default NewPlaylistModal;
