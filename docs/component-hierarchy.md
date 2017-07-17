## Component Hierarchy
**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - Sidebar
  - Playbar
  - Artists

**UserMusicContainer**
  - UserPlaylists
  - UserSongs
  - UserAlbums
  - UserArtists

**Playlists Container**
  - Playlists

**Playlist Container**
  - Playlist
  - CreatePlayList

**ArtistContainer**
  - Artist

**SearchContainer**
  - Search

**AddToPlaylistContainer**
  - AddToPlaylist



  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/mymusic/playlists" | "MyPlaylists" |
  | "/mymusic/songs" | "MySongs" |
  | "/mymusic/albums" | "MyAlbums" |
  | "/mymusic/artists" | "MyArtists" |
  | "/playlists/:playlistId" | "PlaylistContainer" |
  | "/playlists" | "PlaylistIndexContainer" |
  | "/albums/:albumId" | "AlbumContainer" |
  | "/albums"         | "AlbumIndexContainer" |
  | "/artists/:artistId" | "ArtistContainer" |
  | "/artists" | "ArtistIndexContainer" |
  | "/songs/:songId" | "SongDetailContainer" |
  | "/songs" | "SongIndexContainer" |
  | "/search/playlists" | "SearchContainer" |
  | "/search/songs" | "SearchContainer" |
  | "/search/albums" | "SearchContainer" |
  | "/search/artists" | "SearchContainer" |
