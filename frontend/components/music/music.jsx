import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Music extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>MUSIC WILL GO HERE</h1>
        <ReactAudioPlayer
          src="http://res.cloudinary.com/jlofton/video/upload/v1500502810/10_-_ASAP_Rocky-Kissin_Pink_Feat_ASAP_Ferg_Prod_By_Beautiful_Lou_ntsgpp.mp3"
          autoPlay
          controls
        />
      </div>
    );
  }
}

export default Music;
