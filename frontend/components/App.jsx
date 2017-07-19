import { Route, Link } from 'react-router-dom';
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import MusicContainer from './music/music_container';

const App = () => (
  <div>
    <header className="header">

      <Link to="/"><h1 className="App-title">DRIFT</h1></Link>
      <script src="https://use.fontawesome.com/d8bd735538.js" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:900" rel="stylesheet" />
      <script src="http://widget.cloudinary.com/global/all.js" type="text/javascript" />
    </header>

    <Route exact path="/" component={GreetingContainer} />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <Route path="/music" component={MusicContainer} />

    <footer className="footer" />
  </div>
);

export default App;
