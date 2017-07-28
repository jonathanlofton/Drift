# DRIFT

Drift is a single page full stack web application that utilizes a React/Redux frontend and a Ruby on Rails backend with PostgreSQL database. Inspired by spotify, a user can create playlists and browse for new music, as well playing music continuously while navigating through the site.


[ Drift Live Link ](https://driftspotifyclone.herokuapp.com/#/login)

![Frontpage](/app/assets/images/driftgif.gif)


## Features

- Thorough authentication
- Create, and delete playlists
- Browse, and add music to playlists
- Continous music play while navigating website


### Authentication

User's passwords are stored in the database as a salted hash using BCrypt. Salting a password prepends a random string the password so even users with duplicate passwords will not have the same hash stored in the backend.

### Playlist CRUD

Create playlists instantly from any page in the application. And destroy them when your tastes change.

![playlist_create](/app/assets/images/driftcreateplaylist.gif)

Add songs effortlessly to playlists with a modal that displays available playlists to add songs to.

![playlist_add_song](/app/assets/images/driftaddsongtoplaylist.gif)

## Implementation

Drift utilizes the following technologies:

- Ruby
- Rails
- jBuilder
- React.js
- Redux
- JQuery
- SASS

### Rails

  The Drift backend employs Ruby on Rails to build a RESTful api in order to uniformly integrate with the frontend. Jbuilder is used to format JSON objects in order to respond to frontend AJAX requests.

### React/Redux

  React and Redux were used on the frontend to create components with easy to use apis and a single source of truth for the apps current state.

  For the playlist creation a modal playlist form pops up and lets you create a new playlist with custom name. When the form is submitted a create function is dispatched with the users custom text and initial state to create the playlist asynchronously.


  For adding songs to a playlist a modal will pop up and show a list of current playlists that you can add to. Once a playlist is clicked a playlist song object is created giving the choosen playlist an association to pull the appropiate songs out.

### Future

* [ ] Follow Playlists
* [ ] User pages
* [ ] User follows
* [ ] Image uploads for profile/playlists
* [ ] Search
