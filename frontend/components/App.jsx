import { Route, Link } from 'react-router-dom';
import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';


const App = () => (
  <div>
    <header className="header">
      <Link to="/"><h1 className="App-title">DRIFT</h1></Link>
      <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:900" rel="stylesheet" />
    </header>

    <Route exact path="/" component={GreetingContainer} />
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
