import { Route } from 'react-router-dom';
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ArtistIndexContainer from '../artist/artist_index_container';

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="music-landing-page">
        <ReactAudioPlayer
          src="http://res.cloudinary.com/jlofton/video/upload/v1500502810/10_-_ASAP_Rocky-Kissin_Pink_Feat_ASAP_Ferg_Prod_By_Beautiful_Lou_ntsgpp.mp3"
          controls
        />
      <ArtistIndexContainer />
      </div>
    );
  }
}

export default Music;
